const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  
`;

module.exports = typeDefs;
