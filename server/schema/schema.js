const { gql } = require("apollo-server-express");

//Definition of schema
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE
  type Query {
    books: [Book]
    # Id is mandatory and can not be null
    book(id: ID): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    #satisgy the requirement to create new object, the authorID of Book will go to the author in Book resolver
  }
`;

module.exports = typeDefs;
