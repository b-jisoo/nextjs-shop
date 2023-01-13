import React from "react";
import ProductItem from "../productItem";
import { ProductListViewPropsType } from "../types";

const ProductListView = ({
  data,
  onFilterProduct,
}: ProductListViewPropsType) => {
  return (
    <>
      <div className=" flex justify-center items-center h-32 mt-16 border-b-2 border-gray-700">
        <h1 className="text-5xl font-bold ">상품 목록</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-16  ">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          onClick={onFilterProduct}
          value={"전체"}
        >
          전체
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          onClick={onFilterProduct}
          value={"음료"}
        >
          음료
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          value={"빵"}
          onClick={onFilterProduct}
        >
          빵
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          value={"과자"}
          onClick={onFilterProduct}
        >
          과자
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          value={"아이스크림"}
          onClick={onFilterProduct}
        >
          아이스크림
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-[10px] mt-20 px-10  min-w-[800px]">
        {data.productFilter.map((product, index) => (
          <ProductItem {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default ProductListView;
