import { gql } from "@apollo/client";

export type Product = {
  _id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: number;
  category: string;
};

export type MutableProduct = Omit<Product, "id" | "createdAt">; // 지정한 타입을 뺀 나머지 타입.

export type Products = {
  products: Product[];
};

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      _id
      imageUrl
      price
      title
      description
      createdAt
      category
    }
  }
`;
// export const GET_PRODUCT = gql`
//   query GET_PRODUCT($id: ID!) {
//     products(_id: $id) {
//       _id
//       imageUrl
//       price
//       title
//       description
//       createdAt
//       category
//     }
//   }
// `;

export const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT(
    $imageUrl: String!
    $price: Int!
    $title: String!
    $description: String!
    $category: String!
  ) {
    addProduct(
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
      category: $category
    ) {
      _id
      imageUrl
      price
      title
      description
      category
      createdAt
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UPDATE_PRODUCT(
    $id: ID!
    $imageUrl: String!
    $price: Int!
    $title: String!
    $description: String!
    $category: String!
  ) {
    updateProduct(
      id: $id
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
      category: $category
    ) {
      _id
      imageUrl
      price
      title
      description
      category
      createdAt
    }
  }
`;
