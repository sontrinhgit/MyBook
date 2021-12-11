//resolver as a middle between schema and application for user asking the data

const Author = require("../model/Author");
const Book = require("../model/Book");

const resolvers = {
  //Truy xuat du lieu tu co so du lieu
  Query: {
    //based on the server we have in app, 3 parameter inside
    //need to async and await here because based on the db.js, this value return a async await value
    books: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllBooks();
    },
    book: async (parent, { id }, context) =>
      await context.mongoDataMethods.getBookById(id),
    authors: async (parent, arg, context) => {
      return await context.mongoDataMethods.getAllAuthor();
    },
    author: async (parent, { id }, context) => {
      return await context.mongoDataMethods.getAuthorById(id);
    },
  },
  Book: {
    author: async ({authorId}, args, {mongoDataMethods}) => {
    
      return await mongoDataMethods.getAuthorById(authorId)
    },
  },
  Author: {
    books: async ({id}, args, {mongoDataMethods}) =>
      {
          return await mongoDataMethods.getAllBooks({authorId: id})
      }
  },

  //Insert du lieu
  Mutation: {
    createAuthor: async (parent, args, context) =>
      await context.mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, context) =>
      await context.mongoDataMethods.createBook(args),
  },
};

module.exports = resolvers;
