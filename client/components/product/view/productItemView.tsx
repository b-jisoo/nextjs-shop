import Link from "next/link";
import React from "react";
import { ProductItemViewPropsType } from "../types";

const ProductItemView = ({ data, onAddCart }: ProductItemViewPropsType) => {
  return (
    <>
      <li className="border-2 border-solid flex flex-col text-center justify-center py-4">
        <Link href={`/products/${data.product._id}`}>
          <p className="">{data.product.title}</p>
          <img className="mx-auto w-[200px]" src={data.product.imageUrl} />
        </Link>
        <span className="product-item__price">
          ₩{data.product.price.toLocaleString("ko-KR")}
        </span>
        <button className="border-2 w-32 mx-auto " onClick={onAddCart}>
          담기
        </button>
      </li>
    </>
  );
};

export default ProductItemView;
