import React from "react";
import { ProductFilerById } from "../../graphql/types";
import Item from "./item";

type Props = {};

const List = (props: ProductFilerById) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-[10px]  px-10 min-w-[1350px]">
        {props.productFilter.map((product, index) => (
          <Item {...product} key={index} />
        ))}
      </ul>
    </>
  );
};

export default List;
