import classNames from "classnames";
import { Fragment } from "react";
import "./Style.scss";

interface BreadcrumbsProps {
  items: { href: string; text: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <Fragment>
      {items?.length && (
        <div className="breadcrumb">
          {items.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className={classNames("breadcrumb__item", {
                "last-item": index === items.length - 1,
              })}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Breadcrumbs;
