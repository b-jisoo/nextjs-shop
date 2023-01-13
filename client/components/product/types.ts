import { SyntheticEvent } from "react";
import { ProductFilerById, ProductType } from "../../graphql/types";

interface IProductType {
  data: ProductType;
}
export interface ProductListViewPropsType {
  data: ProductFilerById;
  onFilterProduct: (e: SyntheticEvent) => void;
}
export interface ProductItemViewPropsType extends IProductType {
  onAddCart: (e: SyntheticEvent) => void;
}
export interface ProductDetailViewPropsType extends IProductType {
  onAddCart: (e: SyntheticEvent) => void;
}
