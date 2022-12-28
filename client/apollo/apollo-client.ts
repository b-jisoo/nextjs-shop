import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://ip-172-31-8-255.ap-northeast-2.compute.internal",
  cache: new InMemoryCache(),
});

export default client;
