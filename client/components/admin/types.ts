import { SyntheticEvent } from "react";
import { ProductType } from "../../graphql/types";

export interface FormInputs {
  inputs: {
    title: string;
    imageUrl: string;
    price: number;
    description: string;
    category: string;
  };
}

export interface addFormPropsType extends FormInputs {
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ItemViewPropsType {
  data: ProductType;
  isEditing: boolean;
  onClickButton: () => void;
  onDeleteProduct: () => void;
}

export interface EditingItemViewPropsType extends FormInputs {
  doneEditing: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: SyntheticEvent) => void;
}
