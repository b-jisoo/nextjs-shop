import { gql } from "apollo-server-express";

const cartSchema = gql`
  type CartItem {
    _id: ID!
    amount: Int!
    product: Product!
  }
  extend type Query {
    cart: [CartItem!]
  }
  extend type Mutation {
    addCart(productId: ID!): [CartItem!]
    decreaseCart(cartId: ID!): [CartItem!]
    deleteCart(cartId: ID!): Boolean!
    executePay(ids: [ID!]): [ID!]
  }
`;

export default cartSchema;
