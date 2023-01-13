import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CARTS } from "../../graphql/cart";
import CartItem from "./cartItem";
import { CartTypes } from "./types";
import CartListView from "./view/cartListView";

type Props = {};

const CartList = (props: CartTypes) => {
  return <CartListView {...props} />;
};

export default CartList;
