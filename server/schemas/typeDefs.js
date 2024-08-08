const typeDefs = `
    # Queries
    type Query {
        user(id: ID!): User
        users: [User]
        currentUser: User
    }

    # Mutations
    type Mutation {
        createUser(username: String!, password: String!): User
        updateUser(id: ID!, username: String, password: String): User
        deleteUser(id: ID!): Boolean
        login(username: String!, password: String!): AuthPayload
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
        password: String
    }
`;

module.exports = typeDefs;
