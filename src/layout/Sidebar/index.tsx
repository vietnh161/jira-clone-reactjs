import { FunctionComponent } from "react";
import "./Style.scss";
import SidebarLink from "./SidebarLink";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const project = {
    name: "Ducky Up",
    category: "Game",
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top d-flex justify-content-start align-items-center p-t-24 p-b-24">
        <div className="sidebar__logo">
          <img
            src={process.env.PUBLIC_URL + "/logo/duck.png"}
            alt="project logo"
          />
        </div>
        <div className="sidebar__project-info p-l-10 p-t-3">
          <div className="sidebar__project-name">{project.name}</div>
          <div className="sidebar__project-category">
            {project.category} project
          </div>
        </div>
      </div>
      <SidebarLink href="project/board" icon="icon-layout-top">
        Kanban Board
      </SidebarLink>
      <SidebarLink href="project/setting" icon="icon-setting">
        Project Settings
      </SidebarLink>
      <div className="sidebar__link-divider"></div>
      <SidebarLink href="" icon="icon-truck">
        Releases
      </SidebarLink>
      <SidebarLink href="" icon="icon-align-left">
        Issues and filters
      </SidebarLink>
      <SidebarLink href="" icon="icon-page">
        Pages
      </SidebarLink>
      <SidebarLink href="" icon="icon-report">
        Reports
      </SidebarLink>
      <SidebarLink href="" icon="icon-grid">
        Components
      </SidebarLink>
    </div>
  );
};

export default Sidebar;
