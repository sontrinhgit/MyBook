//Load Schema and resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

//Database
const mongoose = require("mongoose");

//Load DB method
const mongoDataMethods = require('./data/db')

//connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://son:123@cluster0.x23c1.mongodb.net/Cluster0?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({mongoDataMethods})
});

const app = express();

server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
