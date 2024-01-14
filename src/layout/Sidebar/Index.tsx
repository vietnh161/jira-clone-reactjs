import { FunctionComponent } from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar__link" to="project/board">board</Link>
      <Link className="sidebar__link" to="project/setting">setting</Link>
    </div>
  );
};

export default Sidebar;
