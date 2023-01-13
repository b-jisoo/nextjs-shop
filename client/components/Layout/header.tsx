import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CARTS } from "../../graphql/cart";
import HeaderView from "./headerView";
import { CartTypes } from "../cart/types";

type Props = {};

const Header = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<CartTypes>(GET_CARTS);
  if (!data) return null;

  return <HeaderView data={data} />;
};

export default Header;
