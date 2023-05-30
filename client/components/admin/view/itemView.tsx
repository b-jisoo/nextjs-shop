import Link from "next/link";
import React from "react";
import EditingItem from "../editingItem";
import { ItemViewPropsType } from "../types";

const ItemView = ({
  data,
  isEditing,
  onClickButton,
  onDeleteProduct,
}: ItemViewPropsType) => {
  if (isEditing) {
    return <EditingItem product={data.product} doneEditing={onClickButton} />;
  }
  return (
    <li className="min-h-[400px] border-2 border-solid flex flex-col text-center justify-center py-4">
      <Link href={`/products/${data.product._id}`}>
        <p className="font-bold">{data?.product.title}</p>
        <img className="mx-auto w-[200px]" src={data?.product.imageUrl} />
        <span className="product-item__price">
          ₩{data?.product.price.toLocaleString("ko-KR")}
        </span>
      </Link>
      <button className="border-2 w-32 mx-auto " onClick={onClickButton}>
        수정
      </button>
      <button
        className="border-2 w-32 mx-auto text-white bg-red-700 hover:bg-red-800 "
        onClick={onDeleteProduct}
      >
        삭제
      </button>
    </li>
  );
};

export default ItemView;
