import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import cors from "cors";

const port = 5000;

(async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const app = express();
  app.use(cors());
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  console.log(`process.env.MONGO_URI: ${process.env.MONGO_URI}`);

  const connect = mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

  await app.listen({ port });
  console.log(`server listening on ${port}...`);
})();
