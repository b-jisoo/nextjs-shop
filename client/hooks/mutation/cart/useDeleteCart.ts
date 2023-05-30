import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_CART, GET_CARTS } from "../../../graphql/cart";

const useDeleteCart = () => {
  const [deleteCart, {}] = useMutation(DELETE_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });
  return deleteCart;
};

export default useDeleteCart;
