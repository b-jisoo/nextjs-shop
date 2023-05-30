import React from "react";
import CartItem from "../cartItem";
import { CartTypes } from "../types";

const CartListView = (props: CartTypes) => {
  if (props.cart.length === 0)
    return (
      <div className="flex justify-center items-center text-lg h-80">
        상품이 없습니다
      </div>
    );

  return (
    <>
      {props.cart.map((item, i) => (
        <CartItem {...item} key={item._id} />
      ))}
    </>
  );
};

export default CartListView;
