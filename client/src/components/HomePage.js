import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import { FolderFill } from "react-bootstrap-icons";
import { PlusCircleFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { ArchiveFill } from "react-bootstrap-icons";
import PageContainer from "./PageContainer";

const HomePage = () => {
  return (
    <PageContainer pageTitle="Welcome">
      <main id="menu-container">
        <div className="menu-item">
          <FolderFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/current-projects">
              Existing Projects
            </NavLink>
          </Button>
        </div>
        <div className="menu-item">
          <PlusCircleFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/choose-template-route">
              Create new project
            </NavLink>
          </Button>
        </div>
        <div className="menu-item">
          <PersonFill size={90} />
          <Button variant="dark">Project Reviews</Button>
        </div>
        <div className="menu-item">
          <ArchiveFill size={90} />
          <Button variant="dark">Archived Projects</Button>
        </div>
      </main>
    </PageContainer>
  );
};

export default HomePage;
