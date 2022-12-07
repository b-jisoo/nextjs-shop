import { useQuery } from "@apollo/client";
import AddForm from "../components/Layout/admin/addForm";
import List from "../components/Layout/admin/list";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ID,
  Products,
  Products_id,
} from "../graphql/products";

type Props = {};

// TODO: id만 받아와서 item에서 상품 정보 가져오도록 구현하기
//       그 다음 삭제 후 refetch 돌아가게 구현

const Admin = (props: Props) => {
  const { data, loading, error, refetch } =
    useQuery<Products_id>(GET_PRODUCTS_ID);

  console.log(data);

  if (!data) return null;
  return (
    <>
      <AddForm />
      <List {...data} />
    </>
  );
};

export default Admin;
