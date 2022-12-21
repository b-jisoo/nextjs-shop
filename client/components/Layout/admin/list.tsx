import React from "react";
import { ProductFilerId } from "../../../graphql/products";
import Item from "./item";

type Props = {};

const List = (props: ProductFilerId) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-[10px]  px-10">
        {props.productFilter.map((product, index) => (
          <Item {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default List;
