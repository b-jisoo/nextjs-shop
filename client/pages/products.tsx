import React from "react";
import ProductList from "../components/productList";
import Seo from "../components/Seo";

type Props = {};

const Products = (props: Props) => {
  return (
    <>
      <Seo />
      <ProductList />
    </>
  );
};

export default Products;
