import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PRODUCTS, Products } from "../../../graphql/products";
import Item from "./item";

type Props = {};

const List = (props: Props) => {
  const { data, loading, error } = useQuery<Products>(GET_PRODUCTS);
  console.log(data);

  return (
    <>
      <ul className="grid grid-cols-4 gap-[10px]  px-10">
        {data?.products.map((product, index) => (
          <Item {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default List;
