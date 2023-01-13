import { useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { GET_PRODUCT } from "../../graphql/products";
import { ProductType, ProductById } from "../../graphql/types";
import useDeleteProduct from "../../hooks/mutation/admin/useDeleteProduct";
import EditingItem from "./editingItem";

type Props = {};

const Item = (props: ProductById) => {
  const { data, loading, error, refetch } = useQuery<ProductType>(GET_PRODUCT, {
    variables: { id: props._id },
  });

  const [isEditing, setIsEditing] = useState(false);

  const deleteProduct = useDeleteProduct();

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
      <EditingItem product={data.product} doneEditing={handleClickBttonn} />
    );
  }

  return (
    <li className="border-2 border-solid flex flex-col text-center justify-center py-4">
      <Link href={`/products/${data.product._id}`}>
        <p className="font-bold">{data?.product.title}</p>
        <img className="mx-auto w-[200px]" src={data?.product.imageUrl} />
        <span className="product-item__price">
          ₩{data?.product.price.toLocaleString("ko-KR")}
        </span>
      </Link>
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
