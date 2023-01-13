import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CARTS } from "../../graphql/cart";
import HeaderView from "./view/headerView";
import { CartTypes } from "../cart/types";

type Props = {};

const Header = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<CartTypes>(GET_CARTS);
  const [openMenu, setOpenMenu] = useState(false);
  if (!data) return null;

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return <HeaderView data={data} onClick={handleClick} openMenu={openMenu} />;
};

export default Header;
