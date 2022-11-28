import { gql } from "apollo-server-express";
import cartSchema from "./cart";
import productSchema from "./product";

// 스키마를 한 곳에서 쓸수 있게끔 해주는 스키마
// linkSchema의 값은 무의미한 값
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, productSchema, cartSchema];
