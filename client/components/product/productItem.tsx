import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { SyntheticEvent } from "react";
import { GET_PRODUCT } from "../../graphql/products";
import { ProductById, ProductType } from "../../graphql/types";
import useAddCart from "../../hooks/mutation/cart/useAddCart";

import ProductItemView from "./view/productItemView";

const ProductItem = (props: ProductById) => {
  const { data, loading, error, refetch } = useQuery<ProductType>(GET_PRODUCT, {
    variables: { id: props._id },
  });

  const addCart = useAddCart();

  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: props._id } });
  };
  if (!data) return null;

  return <ProductItemView data={data} onAddCart={handleAddCart} />;
};

export default ProductItem;
