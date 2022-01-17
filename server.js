/* External Modules */
const { ApolloServer } = require("apollo-server");
const {ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const fs = require("fs");
const path = require("path");

require('dotenv').config()

/* Internal Modules */
const resolvers = require("./resolvers");
const context = require("./context");

/* PORT */
const PORT = process.env.PORT || 3001;

const typeDefs = fs.readFileSync(
  path.join( __dirname, 'schema.graphql'),
  'utf8'
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground
  ]
});

server.listen({ port: PORT }).then(({url}) => console.log(`🚀 running at ${url}`));
