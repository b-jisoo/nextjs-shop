import { useQuery } from "@apollo/client";
import AddForm from "../components/admin/addForm";
import List from "../components/admin/list";
import Seo from "../components/common/Seo";
import { GET_PRODUCT_FILTER_ID } from "../graphql/products";
import { ProductFilerById } from "../graphql/types";

type Props = {};
export const ALL_PRODUCTS = "전체";

const AdminPage = (props: Props) => {
  const { data, loading, error, refetch } = useQuery<ProductFilerById>(
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

export default AdminPage;
