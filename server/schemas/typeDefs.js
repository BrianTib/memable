const typeDefs = `
    type Query {
        user(id: ID!): User
        users: [User]
        currentUser: User
        session(id: ID!): Session
        sessions: [Session]
        prompt(id: ID!): Prompt
        prompts: [Prompt]
    }
        
    type Mutation {
        createUser(username: String!, password: String!): User
        updateUser(id: ID!, username: String, password: String): User
        deleteUser(id: ID!): Boolean
        login(username: String!, password: String!): AuthPayload
        createSession(isOnGoing: Boolean, rounds: [ID]): Session
        updateSession(id: ID!, isOnGoing: Boolean, rounds: [ID]): Session
        deleteSession(id: ID!): Boolean
        createPrompt(text: String, imageUrl: String): Prompt
        updatePrompt(id: ID!, text: String, imageUrl: String): Prompt
        deletePrompt(id: ID!): Boolean
    }

    # Auth Payload
    type AuthPayload {
        token: String
        user: User
    }

    # User Type
    type User {
        id: ID!
        username: String!
        email: String
    }

    # Session Type
    type Session {
        id: ID!
        isOnGoing: Boolean
        rounds: [Round]
    }

    # Prompt Type
    type Prompt {
        id: ID!
        text: String
        imageUrl: String
    }
`;

module.exports = typeDefs;
