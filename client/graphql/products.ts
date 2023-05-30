import { gql } from "@apollo/client";

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
export const GET_PRODUCTS_ID = gql`
  query GET_PRODUCTS_ID {
    products {
      _id
    }
  }
`;
export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
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
export const GET_FILTER_PRODUCT_ID = gql`
  query GET_FILTER_PRODUCT_ID($category: String!) {
    productFilter(category: $category) {
      _id
    }
  }
`;

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

export const DELETE_PRODUCT = gql`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id)
  }
`;
