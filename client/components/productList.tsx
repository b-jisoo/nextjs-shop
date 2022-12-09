import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PRODUCTS_ID, Products_id } from "../graphql/products";
import ProductItem from "./productItem";

type Props = {};

const ProductList = (props: Props) => {
  const { data, loading, error, refetch } =
    useQuery<Products_id>(GET_PRODUCTS_ID);
  return (
    <>
      <div className=" flex justify-center items-center h-32 mt-16 border-b-2 border-gray-700">
        <h1 className="text-5xl font-bold ">상품 목록</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-16  ">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          전체
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          음료
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          빵
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          과자
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          아이스크림
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-[10px] mt-20 px-10">
        {data?.products.map((product, index) => (
          <ProductItem {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
