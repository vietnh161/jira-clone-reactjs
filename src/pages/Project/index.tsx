import { Fragment, FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const ProjectPage: FunctionComponent<Props> = () => {
  return (
    <Fragment>
      <div className="project-page">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default ProjectPage;
