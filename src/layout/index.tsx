import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Sidebar from "./Sidebar";
import CollapsedSidebar from "./CollapsedSidebar";
import Modal from "../shared/components/modal";
import { useState } from "react";

function MainLayout() {
  const [open, setOpen] = useState(true);
  return (
    <div className="main-layout">
      <CollapsedSidebar></CollapsedSidebar>
      <Sidebar></Sidebar>
      <div className="main-content">
        <Outlet />

        <Modal open={open}  title="My modal" onClose={() => {setOpen(!open)}}>
          Hello
        </Modal>
      </div>
    </div>
  );
}

export default MainLayout;
