import { useMutation } from "@apollo/client";
import React from "react";
import { DECREASE_CART, GET_CARTS } from "../../../graphql/cart";

const useDecreaseCart = () => {
  const [decreaseCart, {}] = useMutation(DECREASE_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });
  return decreaseCart;
};

export default useDecreaseCart;
