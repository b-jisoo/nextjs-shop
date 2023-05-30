import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import DetailView from "../../components/product/view/detailView";
import { GET_PRODUCT } from "../../graphql/products";
import { ProductType } from "../../graphql/types";
import useAddCart from "../../hooks/mutation/cart/useAddCart";

type DetailParams = [string] | [];

const ProductDetailPage = () => {
  const router = useRouter();
  const [id] = (router.query.params || []) as DetailParams;
  if (!id) return null;
  const { data, loading, error, refetch } = useQuery<ProductType>(GET_PRODUCT, {
    variables: { id },
  });
  const addCart = useAddCart();

  if (!data) return null;
  const handleAddCart = (e: SyntheticEvent) => {
    addCart({ variables: { productId: data.product._id } });
  };

  return <DetailView data={data} onAddCart={handleAddCart} />;
};

export default ProductDetailPage;
