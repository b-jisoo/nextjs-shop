import { useQuery } from "@apollo/client";
import AddForm from "../components/Layout/admin/addForm";
import List from "../components/Layout/admin/list";
import Seo from "../components/Seo";
import { GET_PRODUCT_FILTER_ID, ProductFilerId } from "../graphql/products";

type Props = {};
export const ALL_PRODUCTS = "전체";

const Admin = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<ProductFilerId>(
    GET_PRODUCT_FILTER_ID,
    {
      variables: { category: ALL_PRODUCTS },
    }
  );

  if (!data) return null;
  return (
    <>
      <Seo />
      <AddForm />
      <List {...data} />
    </>
  );
};

export default Admin;
