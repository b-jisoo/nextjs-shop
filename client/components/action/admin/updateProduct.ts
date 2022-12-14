import { useMutation } from "@apollo/client";
import {
  GET_PRODUCT_FILTER_ID,
  UPDATE_PRODUCT,
} from "../../../graphql/products";
import { ALL_PRODUCTS } from "../../../pages/admin";

const updateProductCompleted = (data: any) => {
  alert(`${data.updateProduct.title}로 변경되었습니다.`);
};

const UpdateProduct = () => {
  const [updateProduct, { data, loading, error }] = useMutation(
    UPDATE_PRODUCT,
    {
      onCompleted: updateProductCompleted,
      refetchQueries: [
        { query: GET_PRODUCT_FILTER_ID, variables: { category: ALL_PRODUCTS } },
      ],
    }
  );
  return updateProduct;
};

export default UpdateProduct;
