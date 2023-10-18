import { Fragment } from "react";

import PublicFooter from "@/components/footer/public";
import PublicHeader from "@/components/header/public";
import childrenType from "@/types/childrenType";

const PublicLayout = ({ children }: childrenType) => {
  return (
    <Fragment>
      <PublicHeader />
      {children}
      <PublicFooter />
    </Fragment>
  );
};

export default PublicLayout;
