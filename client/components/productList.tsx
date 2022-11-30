import React from "react";
import ProductItem from "./productItem";

type Props = {};

const ProductList = (props: Props) => {
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
          카테고리1
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          카테고리2
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
          카테고리3
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          카테고리4
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-[10px] mt-20 px-10">
        <ProductItem />
      </ul>
    </>
  );
};

export default ProductList;
