import { gql } from "apollo-server-express";

const productSchema = gql`
  type Product {
    _id: ID!
    imageUrl: String!
    price: Int!
    title: String!
    description: String!
    createdAt: String
    category: String!
  }

  extend type Query {
    products: [Product!]
    product(id: ID!): Product!
    productFiltered(category: String!): [Product!]
  }

  extend type Mutation {
    addProduct(
      imageUrl: String!
      price: Int!
      title: String!
      description: String!
      category: String
    ): Product!
    updateProduct(
      id: ID!
      imageUrl: String!
      price: Int!
      title: String!
      description: String
      category: String!
    ): Product!
    deleteProduct(id: ID!): Boolean!
  }
`;

export default productSchema;
