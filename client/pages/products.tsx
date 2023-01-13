import React from "react";
import ProductList from "../components/product/productList";
import Seo from "../components/common/Seo";

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
