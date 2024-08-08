const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Session {
    _id: ID
    players: [User]
    rounds: [Round]
    score: [{[string]: Int}]
    createdAt: Date
  }

  type Round {
  _id: ID
  players: [User]
  score: [{[string]: Int}]
  prompt: Prompt
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
