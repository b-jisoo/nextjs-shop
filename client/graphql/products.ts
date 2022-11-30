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
