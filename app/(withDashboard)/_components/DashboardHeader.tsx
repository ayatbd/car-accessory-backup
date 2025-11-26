import { useContext } from "react";
import { PageTitleContext } from "../dashboard/layout";

const DashboardHeader = () => {
  const { title } = useContext(PageTitleContext);
  return (
    <>
      <h1 className="text-[40px] font-semibold text-white">{title}</h1>
    </>
  );
};

export default DashboardHeader;
