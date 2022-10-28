import React from "react";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";

import PageContainer from "../PageContainer";

const NewProjectWindow = () => {
  return (
    <PageContainer pageTitle="Create Project" buttonText="Close" buttonTo="/">
      Well done, your project has been added to the list.
      <br />
      <Button variant="dark">
        <NavLink className="nav-link" to="/current-projects">
          Show active projects
        </NavLink>
      </Button>
    </PageContainer>
  );
};

export default NewProjectWindow;
