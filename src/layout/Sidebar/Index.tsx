import { FunctionComponent } from "react";
import projectLogo from "../../../src/assets/images/duck.png";
import "./Style.scss";
import SidebarLink from "./SidebarLink";
import { ReactComponent as TruckSvg } from "../../assets/icons/truck.svg";
import { ReactComponent as SettingSvg } from "../../assets/icons/setting.svg";
import { ReactComponent as StackSvg } from "../../assets/icons/stack.svg";
import { ReactComponent as PageSvg } from "../../assets/icons/page.svg";
import { ReactComponent as ChartSvg } from "../../assets/icons/chart.svg";
import { ReactComponent as ComponentSvg } from "../../assets/icons/component.svg";
import { ReactComponent as KanbanSvg } from "../../assets/icons/kanban.svg";

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
          <img src={projectLogo} />
        </div>
        <div className="sidebar__project-info p-l-10 p-t-3">
          <div className="sidebar__project-name">{project.name}</div>
          <div className="sidebar__project-category">
            {project.category} project
          </div>
        </div>
      </div>
      <SidebarLink href="project/board" icon={<KanbanSvg />}>
        Kanban Board
      </SidebarLink>
      <SidebarLink href="project/setting" icon={<SettingSvg />}>
        Project Settings
      </SidebarLink>
      <div className="sidebar__link-divider"></div>
      <SidebarLink href="" icon={<TruckSvg />}>
        Releases
      </SidebarLink>
      <SidebarLink href="" icon={<StackSvg />}>
        Issues and filters
      </SidebarLink>
      <SidebarLink href="" icon={<PageSvg />}>
        Pages
      </SidebarLink>
      <SidebarLink href="" icon={<ChartSvg />}>
        Reports
      </SidebarLink>
      <SidebarLink href="" icon={<ComponentSvg />}>
        Components
      </SidebarLink>
    </div>
  );
};

export default Sidebar;
