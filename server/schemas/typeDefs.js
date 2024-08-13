const typeDefs = `
    scalar Date

    type Query {
        currentUser: User
        prompt(id: ID!): Prompt
        prompts: [Prompt]
        session(id: ID!): Session
        sessions: [Session]
        currentRound(id: ID!): Round
        user(id: ID!): User
        users: [User]
    }

    type Mutation {
        createPrompt(text: String, imageUrl: String): Prompt
        createSession: Session
        deletePrompt(id: ID!): Boolean
        deleteSession(id: ID!): Boolean
        deleteUser(id: ID!): Boolean
        login(username: String!, password: String!): AuthPayload
        signUp(username: String!, password: String!): AuthPayload
        updatePrompt(id: ID!, text: String, imageUrl: String): Prompt
        updateSession(id: ID!, isOnGoing: Boolean, rounds: [ID]): Session
        updateUser(id: ID!, username: String, password: String): User
    }

    # Auth Payload
    type AuthPayload {
        token: String
        user: User
    }

    # User Type
    type User {
        _id: ID!
        username: String!
        password: String
    }

    # Session Type
    type Session {
        _id: ID!
        isOnGoing: Boolean
        rounds: [Round]
        currentRound: Round
        owner: User!
        createdAt: Date
        updatedAt: Date
    }

    # Prompt Type
    type Prompt {
        _id: ID!
        text: String
        imageUrl: String
    }

    # Player Response Type
    type PlayerResponse {
        _id: ID!
        player: User!
        response: String!
        totalScore: Int!
        scores: [Score!]!
        createdAt: Date
        updatedAt: Date
    }

    # Score Type
    type Score {
        user: User!
        value: Int!
    }

    # Round Type
    type Round {
        _id: ID!
        prompt: Prompt!
        players: [User!]!
        responses: [PlayerResponse!]!
        totalRoundScore: Int
        roundNumber: Int
        createdAt: Date
        updatedAt: Date
    }
`;

module.exports = typeDefs;
