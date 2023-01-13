import { useQuery } from "@apollo/client";
import React from "react";
import Cart from "../components/cart/view/cartPageView";
import { CartTypes } from "../components/cart/types";
import Seo from "../components/common/Seo";
import { GET_CARTS } from "../graphql/cart";

type Props = {};

const CartPage = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<CartTypes>(GET_CARTS);
  if (!data) return null;
  console.log(data);
  return (
    <>
      <Seo />
      <Cart {...data} />
    </>
  );
};

export default CartPage;
