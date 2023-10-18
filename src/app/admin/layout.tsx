import childrenType from "@/types/childrenType";
import { Fragment } from "react";

const AdminLayout = ({ children }: childrenType) => {
  return (
    <Fragment>
      <header>Admin header</header>
      {children}
      <footer>Admin footer</footer>
    </Fragment>
  );
};

export default AdminLayout;
