import { useQuery } from "@apollo/client";
import React from "react";
import { Products, Products_id } from "../../../graphql/products";
import Item from "./item";

type Props = {};

const List = (props: Products_id) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-[10px]  px-10">
        {props.products.map((product, index) => (
          <Item {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default List;
