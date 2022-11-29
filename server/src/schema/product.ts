import { gql } from "apollo-server-express";

const productSchema = gql`
  type Product {
    id: ID!
    imageUrl: String!
    price: Int!
    title: String!
    decription: String
    createAt: Float
    category: String
  }

  extend type Query {
    products: [Product!]
    product(id: ID!): Product!
  }
`;

export default productSchema;
