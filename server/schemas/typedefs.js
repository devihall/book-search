const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
  }

  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`; // ABOVE-type Query- users will return an array of ALL the users data type
// user query- enforces a query parameter-exclamation point ! after the query parameter data type definitions indicates that for that query to be carried out, that data must exist, otherwise throw error


/////ABOVE-type Mutation- a login() mutation and an addUser() mutation. Both will return a User object: either the user who successfully logged in or the user who was just created on sign-up.-enforces a query parameter-a user can't be created without a username, email, and password.
// authentication to other mutations to know which user is creating a new thought, reacting to an existing thought, or adding a friend.

/////ABOVE-type-Auth type must return a token and can optionally include any other user data.

// export the typeDefs
module.exports = typeDefs;
