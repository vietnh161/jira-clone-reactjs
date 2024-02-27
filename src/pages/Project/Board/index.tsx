import { Fragment } from "react";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";

const Board = () => {
  const breadcrumbItems = [
    {
      href: "",
      text: "Projects",
    },
    {
      href: "",
      text: "Ducky Up",
    },
    {
      href: "",
      text: "Kanban Board",
    },
  ];
  return (
    <Fragment>
      <Breadcrumbs items={breadcrumbItems}></Breadcrumbs>
      <div>Board page</div>
    </Fragment>
  );
};

export default Board;
