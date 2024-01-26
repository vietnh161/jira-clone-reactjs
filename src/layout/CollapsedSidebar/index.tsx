import { FunctionComponent } from "react";
import "./Style.scss";
import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as SearchSvg } from "../../assets/icons/search.svg";
import { ReactComponent as HelpSvg } from "../../assets/icons/help.svg";

interface CollapsedSidebarProps {}

const CollapsedSidebar: FunctionComponent<CollapsedSidebarProps> = () => {
  return (
    <div className="collapsed-sidebar">
      <div className="collapsed-sidebar__logo m-t-20 m-b-10 p-10 m-l-8">
        <LogoSvg />
      </div>
      <div className="collapsed-sidebar__item">
        <SearchSvg />
        <div className="collapsed-sidebar__item-text">Search Issues</div>
      </div>
      <div className="collapsed-sidebar__item">
        <PlusSvg />
        <div className="collapsed-sidebar__item-text">Create Issue</div>
      </div>
      <div className="collapsed-sidebar__item collapsed-sidebar__bottom-item">
        <HelpSvg />
        <div className="collapsed-sidebar__item-text">About</div>
      </div>
    </div>
  );
};

export default CollapsedSidebar;
