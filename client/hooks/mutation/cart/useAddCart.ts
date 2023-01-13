import { useMutation } from "@apollo/client";
import React from "react";
import { ADD_CART, GET_CARTS } from "../../../graphql/cart";

const useAddCart = () => {
  const [addCart] = useMutation(ADD_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });
  return addCart;
};

export default useAddCart;
