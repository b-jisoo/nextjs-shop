import { useQuery } from "@apollo/client";
import React, { SyntheticEvent, useState } from "react";
import { GET_PRODUCT_FILTER_ID, ProductFilerId } from "../graphql/products";
import ProductItem from "./productItem";

type Props = {};

const ProductList = (props: Props) => {
  const [category, setCategory] = useState("전체");
  const { data, loading, error, refetch } = useQuery<ProductFilerId>(
    GET_PRODUCT_FILTER_ID,
    {
      variables: { category },
    }
  );

  const handleFilteringProduct = (e: SyntheticEvent) => {
    setCategory((e.target as HTMLInputElement).value);
  };

  if (!data) return null;

  return (
    <>
      <div className=" flex justify-center items-center h-32 mt-16 border-b-2 border-gray-700">
        <h1 className="text-5xl font-bold ">상품 목록</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-16  ">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          onClick={handleFilteringProduct}
          value={"전체"}
        >
          전체
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          onClick={handleFilteringProduct}
          value={"음료"}
        >
          음료
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          value={"빵"}
          onClick={handleFilteringProduct}
        >
          빵
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
          value={"과자"}
          onClick={handleFilteringProduct}
        >
          과자
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          value={"아이스크림"}
          onClick={handleFilteringProduct}
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

export default ProductList;
