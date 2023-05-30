import { useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { GET_PRODUCT } from "../../graphql/products";
import { ProductType, ProductById } from "../../graphql/types";
import useDeleteProduct from "../../hooks/mutation/admin/useDeleteProduct";
import EditingItem from "./editingItem";
import ItemView from "./view/itemView";

type Props = {};

const Item = (props: ProductById) => {
  const { data, loading, error, refetch } = useQuery<ProductType>(GET_PRODUCT, {
    variables: { id: props._id },
  });

  const [isEditing, setIsEditing] = useState(false);

  const deleteProduct = useDeleteProduct();

  const handleClickButton = () => {
    setIsEditing(!isEditing);
  };
  const handleDeleteProduct = () => {
    if (confirm("이 상품을 삭제하시겠습니까?"))
      deleteProduct({ variables: { id: data?.product._id } });
  };

  if (!data) return null;

  return (
    <ItemView
      data={data}
      isEditing={isEditing}
      onClickButton={handleClickButton}
      onDeleteProduct={handleDeleteProduct}
    />
  );
};

export default Item;
