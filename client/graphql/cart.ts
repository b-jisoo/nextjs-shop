import { gql } from "@apollo/client";

export const GET_CARTS = gql`
  query GET_CARTS {
    cart {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($productId: ID!) {
    addCart(productId: $productId) {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;
export const DECREASE_CART = gql`
  mutation DECREASE_CART($cartId: ID!) {
    decreaseCart(cartId: $cartId) {
      _id
      amount
      product {
        _id
        imageUrl
        price
        title
        description
        createdAt
        category
      }
    }
  }
`;
export const DELETE_CART = gql`
  mutation DELETE_CART($cartId: ID!) {
    deleteCart(cartId: $cartId)
  }
`;
