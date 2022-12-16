import { useMutation } from "@apollo/client";
import React, { SyntheticEvent } from "react";
import { ADD_CART, GET_CARTS } from "../../../graphql/cart";
import { Item } from "../../../pages/cart";

type Props = {};

const CartItem = (props: Item) => {
  const [addCart, { data }] = useMutation(ADD_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });

  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: props.product._id } });
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={props.product.imageUrl} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{props.product.title}</span>
          <span className="text-red-500 text-xs">{props.product.category}</span>
          <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            삭제
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <span className="mx-2 border text-center w-8">{props.amount} </span>

        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={handleAddCart}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {props.product.price.toLocaleString()}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {(props.product.price * props.amount).toLocaleString()}
      </span>
    </div>
  );
};

export default CartItem;
