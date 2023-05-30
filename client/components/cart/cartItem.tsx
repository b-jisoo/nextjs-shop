import { useMutation } from "@apollo/client";
import React, { SyntheticEvent } from "react";
import {
  ADD_CART,
  DECREASE_CART,
  DELETE_CART,
  GET_CARTS,
} from "../../graphql/cart";
import useAddCart from "../../hooks/mutation/cart/useAddCart";
import useDecreaseCart from "../../hooks/mutation/cart/useDecreaseCart";
import useDeleteCart from "../../hooks/mutation/cart/useDeleteCart";
import { CartType } from "./types";
import CartItemView from "./view/cartItemView";

type Props = {};

const CartItem = (props: CartType) => {
  const addCart = useAddCart();
  const decreaseCart = useDecreaseCart();
  const deleteCart = useDeleteCart();

  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: props.product._id } });
  };
  const handleDecreaseCart = (e: SyntheticEvent) => {
    decreaseCart({ variables: { cartId: props._id } });
  };
  const handleDeleteCart = (e: SyntheticEvent) => {
    deleteCart({ variables: { cartId: props._id } });
  };

  return (
    <CartItemView
      data={props}
      addCart={handleAddCart}
      decreaseCart={handleDecreaseCart}
      deleteCart={handleDeleteCart}
    />
  );
};

export default CartItem;
