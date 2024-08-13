const { User, Session, Prompt } = require('../models');
const { GraphQLScalarType, Kind } = require('graphql');
const jwt = require('jsonwebtoken');
const expiration = '6h';

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date scalar type',
    serialize(value) {
        // Convert outgoing Date to ISO string for the client
        return value.toISOString();
    },
    parseValue(value) {
        // Convert incoming ISO string to Date
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            // Convert hard-coded AST string to Date
            return new Date(ast.value);
        }
        return null; // Invalid hard-coded value (not an ISO string)
    },
});

const resolvers = {
    Date: dateScalar,
    Query: {
        user: async (_, { id }) => User.findById(id),
        users: async () => User.find(),
        currentUser: async (_, __, { user }) => {
            if (!user) throw new Error('Not authenticated');
            return User.findById(user.id);
        },
        session: async (_, { id }) => Session.findById(id),
        sessions: async () => Session.find(),
        currentRound: async (_, { id }, ctx) => {
            if (!ctx.user || !ctx.user.id) throw new Error('Not authenticated');
            const session = await Session.findById(id);

            if (!session) throw new Error('No session found');

            await session.populate({
                path: 'rounds',
                populate: [
                    { path: 'prompt' },
                    { path: 'players', select: 'username _id' },
                    { path: 'responses.player', select: 'username _id' },
                ],
            });

            if (!session.currentRound?.players.some(p => p._id.toString() === ctx.user.id)) {
                throw new Error('You are not a player in this round');
            }

            return session.currentRound;
        },
        prompt: async (_, { id }) => Prompt.findById(id),
        prompts: async () => Prompt.find(),
    },
    Mutation: {
        login: async (_, { username, password }) => {
            const user = await User.findWithPassword({ username });

            if (!user || !(await user.isCorrectPassword(password))) {
                throw new Error('Invalid credentials');
            }
            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                {
                    expiresIn: expiration,
                },
            );
            return { token, user };
        },
        signUp: async (_, { username, password }) => {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                throw new Error('That username is not available');
            }

            // This only works if there is no user with the same username
            const user = await User.create({ username, password });
            if (!user) {
                throw new Error('Something went wrong!');
            }

            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                {
                    expiresIn: expiration,
                },
            );
            return { token, user };
        },
        createSession: async (_, __, ctx) => {
            console.log(ctx.user);
            if (!ctx.user || !ctx.user.id) throw new Error('Not authenticated');

            try {
                // Get a random prompt
                const prompt = await Prompt.getRandomPrompt();
                if (!prompt) {
                    throw new Error('Failed to retrieve a random prompt');
                }

                // Create a new session with one round
                const session = await new Session({
                    isOnGoing: true,
                    owner: ctx.user.id,
                    rounds: [
                        {
                            prompt: prompt.id,
                            players: [ctx.user.id],
                            responses: [],
                        },
                    ],
                }).save();

                session.populate('rounds');
                return session;
            } catch (error) {
                console.error('Error creating session:', error);
                throw new Error('Failed to create session');
            }
        },
        updateUser: async (_, { id, username, password }) => {
            const updates = {};
            if (username) updates.username = username;
            if (password) updates.password = password;
            return User.findByIdAndUpdate(id, updates, { new: true }).select('-password');
        },
        deleteUser: async (_, { id }) => {
            await User.findByIdAndDelete(id);
            return true;
        },

        updateSession: async (_, { id, isOnGoing, rounds }) => {
            return Session.findByIdAndUpdate(id, { isOnGoing, rounds }, { new: true });
        },
        deleteSession: async (_, { id }) => {
            await Session.findByIdAndDelete(id);
            return true;
        },
        createPrompt: async (_, { text, imageUrl }) => {
            if (!text && !imageUrl) throw new Error('Either text or imageUrl must be provided.');
            const prompt = new Prompt({ text, imageUrl });
            await prompt.save();
            return prompt;
        },
        updatePrompt: async (_, { id, text, imageUrl }) => {
            if (!text && !imageUrl) throw new Error('Either text or imageUrl must be provided.');
            return Prompt.findByIdAndUpdate(id, { text, imageUrl }, { new: true });
        },
        deletePrompt: async (_, { id }) => {
            await Prompt.findByIdAndDelete(id);
            return true;
        },
    },
};

module.exports = resolvers;
