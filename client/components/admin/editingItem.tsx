import React, { SyntheticEvent, useState } from "react";
import useUpdateProduct from "../../hooks/mutation/admin/useUpdateProduct";
import EditingItemView from "./view/editingItemView";

type Props = {
  doneEditing: () => void;
  product: {
    _id: string;
    imageUrl: string;
    price: number;
    title: string;
    description: string;
    createdAt: number;
    category: string;
  };
};

const EditingItem = (props: Props) => {
  const [inputs, setInputs] = useState({
    id: props.product._id,
    title: props.product.title,
    imageUrl: props.product.imageUrl,
    price: props.product.price,
    description: props.product.description,
    category: props.product.category,
  });

  const updateProduct = useUpdateProduct();

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({
      ...inputs,
      [name]: ["price"].includes(name) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProduct({ variables: inputs });
    props.doneEditing();
  };

  return (
    <EditingItemView
      inputs={inputs}
      doneEditing={props.doneEditing}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default EditingItem;
