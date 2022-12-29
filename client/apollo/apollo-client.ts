import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://3.36.126.19:3000/graphql",
  cache: new InMemoryCache(),
});

export default client;
