import React, { SyntheticEvent, useState } from "react";
import useAddAdminProduct from "../../hooks/mutation/admin/useAddProduct";
import AddFormView from "./view/addFormView";

const AddForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    imageUrl: "",
    price: 0,
    description: "",
    category: "음료",
  });

  const addProduct = useAddAdminProduct();

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({
      ...inputs,
      [name]: ["price"].includes(name) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct({ variables: inputs });
  };

  return (
    <AddFormView
      inputs={inputs}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export default AddForm;
