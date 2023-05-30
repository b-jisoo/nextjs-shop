import React from "react";
import { ProductFilerById } from "../../graphql/types";
import Item from "./item";
import ListView from "./view/listView";

type Props = {};

const List = (props: ProductFilerById) => {
  return <ListView {...props} />;
};

export default List;
