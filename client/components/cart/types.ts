import { SyntheticEvent } from "react";
import { ProductType } from "../../graphql/types";

export interface CartTypes {
  cart: CartType[];
}
export interface CartType extends ProductType {
  amount: number;
  _id: string;
}

export interface CartItemProps {
  data: CartType;
  addCart: (e: SyntheticEvent) => void;
  decreaseCart: (e: SyntheticEvent) => void;
  deleteCart: (e: SyntheticEvent) => void;
}
