import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS_ID,
  Product,
  Product_id,
} from "../../../graphql/products";
import EditProduct from "./edit";

type Props = {};

const Item = (props: Product_id) => {
  const { data, loading, error, refetch } = useQuery<Product>(GET_PRODUCT, {
    variables: { id: props._id },
  });

  const [isEditing, setIsEditing] = useState(false);

  const deleteProductCompleted = (data: any) => {
    alert(`삭제되었습니다`);
  };

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    onCompleted: deleteProductCompleted,
    refetchQueries: [{ query: GET_PRODUCTS_ID }],
  });

  const handleClickBttonn = () => {
    setIsEditing(!isEditing);
  };
  const handleDeleteProduct = () => {
    if (confirm("이 상품을 삭제하시겠습니까?"))
      deleteProduct({ variables: { id: data?.product._id } });
  };

  if (!data) return null;

  if (isEditing) {
    return (
      <EditProduct product={data.product} doneEditing={handleClickBttonn} />
    );
  }

  return (
    <li className="border-2 border-solid flex flex-col text-center justify-center py-4">
      <a href="/products/6bd42cdd-9976-4bdf-b664-60b11b715258">
        <p className="font-bold">{data?.product.title}</p>
        <img className="mx-auto" src={data?.product.imageUrl} />
        <span className="product-item__price">
          ₩{data?.product.price.toLocaleString("ko-KR")}
        </span>
      </a>
      <button className="border-2 w-32 mx-auto " onClick={handleClickBttonn}>
        수정
      </button>
      <button
        className="border-2 w-32 mx-auto text-white bg-red-700 hover:bg-red-800 "
        onClick={handleDeleteProduct}
      >
        삭제
      </button>
    </li>
  );
};

export default Item;
