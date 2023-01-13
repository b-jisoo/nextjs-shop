import { SyntheticEvent } from "react";
import { ProductFilerById, ProductType } from "../../graphql/types";

export interface ProductListViewPropsType {
  data: ProductFilerById;
  onFilterProduct: (e: SyntheticEvent) => void;
}
export interface ProductItemViewPropsType {
  data: ProductType;
  onAddCart: (e: SyntheticEvent) => void;
}
