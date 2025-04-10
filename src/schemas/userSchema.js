const { buildSchema } = require('graphql');

const userSchema = buildSchema(`
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID
    name: String
    email: String
  }
`);

module.exports = userSchema;
