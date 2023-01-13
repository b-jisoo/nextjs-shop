import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import { ADD_CART, GET_CARTS } from "../../graphql/cart";
import { GET_PRODUCT } from "../../graphql/products";
import { ProductType } from "../../graphql/types";

type Props = {};
type DetailParams = [string] | [];

const ProductDetail = (props: Props) => {
  const router = useRouter();
  const [id] = (router.query.params || []) as DetailParams;
  if (!id) return null;
  const { data, loading, error, refetch } = useQuery<ProductType>(GET_PRODUCT, {
    variables: { id },
  });
  const [addCart, {}] = useMutation(ADD_CART, {
    refetchQueries: [{ query: GET_CARTS }],
  });

  if (!data) return null;
  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: data.product._id } });
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={data.product.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data.product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">
              {data.product.title}
            </h1>
            <div className="flex mb-4 "></div>
            <p className="leading-relaxed mt-10 min-h-[200px]">
              {data.product.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₩{data?.product.price.toLocaleString("ko-KR")}
              </span>
              <button
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                onClick={handleAddCart}
              >
                담기
              </button>
              <Link href="/cart">
                <button className=" bg-gray-200 py-2 px-6 border-0 inline-flex items-center justify-center text-gray-500 ml-4 rounded hover:bg-gray-300">
                  카트로 이동
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
