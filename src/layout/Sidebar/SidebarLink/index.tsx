import classNames from "classnames";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./Style.scss";

export type SidebarLinkProps = {
  icon?: ReactElement;
  text?: string;
  href?: string;
  disabled?: boolean;
  children?: string | ReactElement;
};

export default function Link(props: SidebarLinkProps) {
  return (
    <NavLink
      className={classNames("sidebar-link", {
        "sidebar-link--disabled": props.disabled,
      })}
      to={props.href || ""}
    >
      {props.icon && <div className="sidebar-link__icon m-r-12">{props.icon}</div>}
      {props.children && <div className="sidebar-link__text">{props.children}</div>}
    </NavLink>
  );
}
