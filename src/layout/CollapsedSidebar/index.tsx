import { FunctionComponent, useState } from "react";
import "./Style.scss";
import Modal from "../../shared/components/modal";

interface CollapsedSidebarProps {}

const CollapsedSidebar: FunctionComponent<CollapsedSidebarProps> = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="collapsed-sidebar">
      <div className="collapsed-sidebar__logo m-t-20 m-b-10 p-10 m-l-8">
        <object
          data={process.env.PUBLIC_URL + "/logo/logo.svg"}
          type="image/svg+xml"
          aria-label="jira logo"
        ></object>
      </div>
      <div className="collapsed-sidebar__item">
        <div className="icon-search-white"></div>
        <div className="collapsed-sidebar__item-text">Search Issues</div>
      </div>
      <div className="collapsed-sidebar__item">
        <div className="icon-plus-white"></div>

        <div className="collapsed-sidebar__item-text">Create Issue</div>
      </div>
      <div className="collapsed-sidebar__item collapsed-sidebar__bottom-item">
        <div className="icon-about-white"></div>
        <div className="collapsed-sidebar__item-text">About</div>
      </div>
    </div>
  );
};

export default CollapsedSidebar;
