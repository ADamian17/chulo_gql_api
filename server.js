const fs = require("fs");
const path = require("path");

const { ApolloServer } = require("apollo-server");
// import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3001;

const resolvers = require("./resolvers");

// const pubSub = new PubSub();
// const prisma = new PrismaClient();

const typeDefs = fs.readFileSync(
  path.join( __dirname, 'schema.graphql'),
  'utf8'
);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(PORT).then(({url}) => console.log(`🚀 running at ${url}`));