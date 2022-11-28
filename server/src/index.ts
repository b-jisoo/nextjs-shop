import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";

const port = 5000;

(async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: ["https://localhost:3000"],
      credentials: true,
    },
  });
  await app.listen({ port });
  console.log(`server listening on ${port}...`);
})();
