import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://3.35.216.73:5000/graphql",
  cache: new InMemoryCache(),
});

export default client;
