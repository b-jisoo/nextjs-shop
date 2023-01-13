import { useMutation } from "@apollo/client";
import {
  DELETE_PRODUCT,
  GET_FILTER_PRODUCT_ID,
} from "../../../graphql/products";
import { ALL_PRODUCTS } from "../../../pages/admin";

const deleteProductCompleted = (data: any) => {
  alert(`삭제되었습니다`);
};

const useDeleteProduct = () => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    onCompleted: deleteProductCompleted,
    refetchQueries: [
      { query: GET_FILTER_PRODUCT_ID, variables: { category: ALL_PRODUCTS } },
    ],
  });
  return deleteProduct;
};

export default useDeleteProduct;
