import { useQuery } from "@apollo/client";
import AddForm from "../components/Layout/admin/addForm";
import List from "../components/Layout/admin/list";
import { GET_PRODUCTS, Products } from "../graphql/products";

type Props = {};

const Admin = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<Products>(GET_PRODUCTS);
  if (!data) return null;
  console.log(data);
  return (
    <>
      <AddForm refetchProducts={refetch} />
      <List {...data} />
    </>
  );
};

export default Admin;
