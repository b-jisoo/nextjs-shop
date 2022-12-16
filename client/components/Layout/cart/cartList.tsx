import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CARTS } from "../../../graphql/cart";
import { Product } from "../../../graphql/products";
import { CartType } from "../../../pages/cart";
import CartItem from "./cartItem";

type Props = {};

const CartList = (props: CartType) => {
  return (
    <>
      {props.cart.map((item, i) => (
        <CartItem {...item} key={i} />
      ))}
    </>
  );
};

export default CartList;
