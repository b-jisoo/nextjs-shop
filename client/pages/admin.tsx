import AddForm from "../components/Layout/admin/addForm";
import List from "../components/Layout/admin/list";

type Props = {};

const Admin = (props: Props) => {
  return (
    <>
      <AddForm />
      <List />
    </>
  );
};

export default Admin;
