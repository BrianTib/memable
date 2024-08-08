const typeDefs = `
  scalar Date

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Score {
    player: String!
    value: Int!
  }

  type Prompt {
    _id: ID
    text: String!
  }

  type Round {
    _id: ID
    prompt: Prompt
    players: [User]
    scores: [Score]
    createdAt: Date
  }

  type Session {
    _id: ID
    players: [User]
    rounds: [Round]
    scores: [Score]
    createdAt: Date
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
