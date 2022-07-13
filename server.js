require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const resolver = require("./graphql/resolver");
const typeDefs = require("./graphql/typeDefs");
const { MONGOOSE, PORT } = process.env;

async function server() {
  const app = express();
  app.use(cors());
  app.use(morgan("common"));
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolver,
  });
  
    await server.start();
  
    server.applyMiddleware({ app });
  mongoose
    .connect(MONGOOSE, { useNewUrlParser: true })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => console.log(err));

  app.listen({ port: PORT }, () => {
    console.log(`server running on port ${4001}`);
  });
}

server();
