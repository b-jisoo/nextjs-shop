import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { SyntheticEvent } from "react";
import { ADD_CART, GET_CARTS } from "../graphql/cart";
import { GET_PRODUCT, Product, Product_id } from "../graphql/products";

type Props = {};

const ProductItem = (props: Product_id) => {
  const { data, loading, error, refetch } = useQuery<Product>(GET_PRODUCT, {
    variables: { id: props._id },
  });
  console.log(props);

  const [addCart, {}] = useMutation(ADD_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });

  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: props._id } });
  };
  if (!data) return null;

  return (
    <>
      <li className="border-2 border-solid flex flex-col text-center justify-center py-4">
        <Link href={`/products/${data.product._id}`}>
          <p className="">{data.product.title}</p>
          <img className="mx-auto" src={data.product.imageUrl} />
        </Link>
        <span className="product-item__price">
          ₩{data.product.price.toLocaleString("ko-KR")}
        </span>
        <button className="border-2 w-32 mx-auto " onClick={handleAddCart}>
          담기
        </button>
      </li>
    </>
  );
};

export default ProductItem;
