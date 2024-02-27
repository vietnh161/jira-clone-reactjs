import { useState } from "react";
import { Outlet } from "react-router-dom";
import CreateIssueModal from "../pages/CreateIssueModal";
import CollapsedSidebar from "./CollapsedSidebar";
import "./Layout.scss";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [open, setOpen] = useState(true);
  return (
    <div className="main-layout">
      <CollapsedSidebar></CollapsedSidebar>
      <Sidebar></Sidebar>
      <div className="main-content">
        <Outlet />

        <CreateIssueModal
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
        />
      </div>
    </div>
  );
}

export default MainLayout;
