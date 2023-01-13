import { useMutation } from "@apollo/client";
import { ADD_PRODUCT, GET_PRODUCT_FILTER_ID } from "../../../graphql/products";
import { ALL_PRODUCTS } from "../../../pages/admin";

const addProductCompleted = (data: any) => {
  alert(`${data.addProduct.title}가 추가되었습니다.`);
};

const useAddAdminProduct = () => {
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, {
    onCompleted: addProductCompleted,
    refetchQueries: [
      { query: GET_PRODUCT_FILTER_ID, variables: { category: ALL_PRODUCTS } },
    ],
  });

  return addProduct;
};

export default useAddAdminProduct;
