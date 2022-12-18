import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import CartList from "../components/Layout/cart/cartList";
import { GET_CARTS } from "../graphql/cart";

export type CartType = {
  cart: Item[];
};
export type Item = {
  amount: number;
  product: {
    _id: string;
    imageUrl: string;
    price: number;
    title: string;
    description: string;
    createdAt: number;
    category: string;
  };
  _id: string;
};

type Props = {};

const Cart = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<CartType>(GET_CARTS);
  if (!data) return null;
  return (
    <section className="mt-20 min-h-screen bg-gray-100">
      <div className="">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">장바구니</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  제품명
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  수량
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  가격
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  총 가격
                </h3>
              </div>

              {/* <!-- product --> */}
              <CartList {...data} />
              {/* <!-- product --> */}
              <Link
                href="/products"
                className="flex font-semibold text-blue-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-blue-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">결제정보</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">상품수</span>
                <span className="font-semibold text-sm">
                  {data.cart.reduce((acc, cur) => {
                    return acc + cur.amount;
                  }, 0)}
                  개
                </span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="font-semibold text-sm uppercase">
                  상품금액
                </span>
                <span className="font-semibold text-sm">
                  {data.cart
                    .reduce((acc, cur) => {
                      return acc + cur.product.price * cur.amount;
                    }, 0)
                    .toLocaleString()}
                  원
                </span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="font-semibold text-sm uppercase">
                  할인금액
                </span>
                <span className="font-semibold text-sm">0원</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="font-semibold text-sm uppercase">배송비</span>
                <span className="font-semibold text-sm">0원</span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>총 결제금액</span>
                  <span>
                    {data.cart
                      .reduce((acc, cur) => {
                        return acc + cur.product.price * cur.amount;
                      }, 0)
                      .toLocaleString()}
                    원
                  </span>
                </div>
                <button className="bg-blue-500 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
