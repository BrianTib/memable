const { User, Session, Prompt } = require('../models');

const jwt = require('jsonwebtoken');
const expiration = '2h';

const resolvers = {
    Query: {
        user: async (_, { id }) => User.findById(id),
        users: async () => User.find(),
        currentUser: async (_, __, { user }) => {
            if (!user) throw new Error('Not authenticated');
            return User.findById(user.id);
        },
        session: async (_, { id }) => Session.findById(id),
        sessions: async () => Session.find(),
        prompt: async (_, { id }) => Prompt.findById(id),
        prompts: async () => Prompt.find(),
    },
    Mutation: {
        createUser: async (_, { username, password }) => {
            const user = new User({ username, password });
            await user.save();
            return user;
        },
        updateUser: async (_, { id, username, password }) => {
            return User.findByIdAndUpdate(id, { username, password }, { new: true });
        },
        login: async (_, { username, password }) => {
            const user = await User.findOne({ username });
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
        deleteUser: async (_, { id }) => {
            await User.findByIdAndDelete(id);
            return true;
        },
        createSession: async (_, { isOnGoing, rounds }) => {
            const session = new Session({ isOnGoing, rounds });
            await session.save();
            return session;
        },
        updateSession: async (_, { id, isOnGoing, rounds }) => {
            return Session.findByIdAndUpdate(id, { isOnGoing, rounds }, { new: true });
        },
        deleteSession: async (_, { id }) => {
            await Session.findByIdAndDelete(id);
            return true;
        },
        createPrompt: async (_, { text, imageUrl }) => {
            const prompt = new Prompt({ text, imageUrl });
            await prompt.save();
            return prompt;
        },
        updatePrompt: async (_, { id, text, imageUrl }) => {
            return Prompt.findByIdAndUpdate(id, { text, imageUrl }, { new: true });
        },
        deletePrompt: async (_, { id }) => {
            await Prompt.findByIdAndDelete(id);
            return true;
        },
    },
};

module.exports = resolvers;
