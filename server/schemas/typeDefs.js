const typeDefs = `
    type Query {
        currentUser: User
        prompt(id: ID!): Prompt
        prompts: [Prompt]
        session(id: ID!): Session
        sessions: [Session]
        user(id: ID!): User
        users: [User]
    }

    type Mutation {
        createPrompt(text: String, imageUrl: String): Prompt
        createSession(isOnGoing: Boolean, rounds: [ID]): Session
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
    }

    # Prompt Type
    type Prompt {
        _id: ID!
        text: String
        imageUrl: String
    }

    # Round Type
    type Round {
        _id: ID!
        prompt: String
        players: [User!]!
        scores: [PlayerResponse!]!
        totalRoundScore: Int
        createdAt: String
        updatedAt: String
    }

    # Player Response Type
    type PlayerResponse {
        _id: ID!
        player: User
        response: String
        totalScore: Int
        scores: [Score!]!
        createdAt: String
        updatedAt: String
    }

    # Score Type
    type Score {
        user: User
        value: Int
    }
`;

module.exports = typeDefs;
