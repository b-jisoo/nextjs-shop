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

const Admin = (props: Props) => {
  const { data, loading, error, refetch } =
    useQuery<Products_id>(GET_PRODUCTS_ID);

  if (!data) return null;
  return (
    <>
      <AddForm />
      <List {...data} />
    </>
  );
};

export default Admin;
