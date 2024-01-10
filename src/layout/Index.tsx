import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Sidebar from "./Sidebar/Index";
import CollapsedSidebar from "./CollapsedSidebar/Index";

function MainLayout() {
  return (
    <div className="main-layout">
      <CollapsedSidebar></CollapsedSidebar>
      <Sidebar></Sidebar>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
