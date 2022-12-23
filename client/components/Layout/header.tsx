import Head from "next/head";
import vercel from "../../public/favicon.ico";
import cartIcon from "../../public/cart_icon.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { CartType } from "../../pages/cart";
import { GET_CARTS } from "../../graphql/cart";

type Props = {};

const Header = (props: Props) => {
  // const [isActive, setIsActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  const { data, loading, error, refetch } = useQuery<CartType>(GET_CARTS);
  console.log(data);
  if (!data) return null;
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-6 fixed top-0 w-full bg-white z-[99] shadow-md text-black ">
        <div className="flex items-center flex-shrink-0  mr-6">
          <Image
            src={vercel}
            alt="logo"
            width={54}
            height={54}
            className="fill-current mr-5 w-8 h-8"
          />

          <span className="font-semibold text-xl tracking-tight ">
            Next-Shop
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-gray-400 hover:border-gray-800"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            openMenu ? "hidden" : ""
          } `}
        >
          <div className={`text-sm lg:flex-grow  `}>
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400 mr-4"
            >
              Product
            </Link>
            <Link
              href="/admin"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-400"
            >
              Admin
            </Link>
          </div>
          <div>
            <Link
              href="/cart"
              className=" flex text-sm px-4 py-2 leading-none border rounded bg-white  border-white hover:border-transparent hover:text-gray-200 hover:bg-gray-400 mt-4 lg:mt-0 text-black"
            >
              <Image
                src={cartIcon}
                alt="cartIcon"
                width={15}
                className="mr-1"
              />
              Cart (
              {data.cart.reduce((acc, cur) => {
                return acc + cur.amount;
              }, 0)}
              )
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
