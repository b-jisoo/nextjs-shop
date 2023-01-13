import { useQuery } from "@apollo/client";
import React, { SyntheticEvent, useState } from "react";
import { GET_PRODUCT_FILTER_ID } from "../../graphql/products";
import { ProductFilerById } from "../../graphql/types";
import ProductItem from "./productItem";
import ProductListView from "./view/productListView";

const ProductList = () => {
  const [category, setCategory] = useState("전체");
  const { data, loading, error, refetch } = useQuery<ProductFilerById>(
    GET_PRODUCT_FILTER_ID,
    {
      variables: { category },
    }
  );

  const handleFilterProduct = (e: SyntheticEvent) => {
    setCategory((e.target as HTMLInputElement).value);
  };

  if (!data) return null;

  return <ProductListView data={data} onFilterProduct={handleFilterProduct} />;
};

export default ProductList;
