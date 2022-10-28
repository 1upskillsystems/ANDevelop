import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import { FolderFill } from "react-bootstrap-icons";
import { PlusCircleFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { ArchiveFill } from "react-bootstrap-icons";
import { ChatSquareTextFill } from "react-bootstrap-icons";
import PageContainer from "./PageContainer";

const HomePage = () => {
  return (
    <PageContainer pageTitle="Welcome">
      <main id="menu-container">
        <div id="info">
        <h1>Introducing ANDevelop</h1>
        <p>ANDevelop is a platform which was made to cut out the hassle in setting up projects for upskilling your team. Its simple layout will help you seamlessly start your projects, whether you choose from our extensive list of pre-made projects or decide to create a whole new project of your own. ANDevelop will provide a framework for your team to gain the most out of their upskilling experience.</p>
        <p>This portal offers a wide range of services. These key features are summarised at a high level bellow:</p>
        <ul>
          <li>Project Creation: allows you to generate new projects and assign team members roles and responsibilities. Projects can be built from a library of custom templates or generated from scratch.</li>
          <li>Existing Projects: Once a project has been started its progress can be monitored in the “Existing Projects” section. This provides key information with regards to who is involved in the project, what roles they hold and how much time is left on the project.</li>
          <li>Archived Projects: allows you to revisit closed projects and see how was involved and what roles they took.</li>
          <li>Project Reviews: gives users a chance to both give and receive feedback. This feedback could be about a template, how well a group worked or even one to one feedback from a fellow user. All this helps aid their upskilling experience.</li>
        </ul>

        <h2>Starting a Project</h2>
        <p>This section will cover in detail what you should do if you have an idea for a new project or just want to browse through our wide selection of pre-made templates.</p>
        <p>Opening the Project Creation Portal</p>
        <ol>
          <li>Firstly open the service at the following web address: https://ANDevelop.com</li>
          <li>Select the section named “Create New Project”</li>
          <li>You will be presented with either the option of “Create New Template” or “Select Project Template”.
            <ul>
            <li>a) If you would rather create your own fully customisable template follow instructions “Creating a New Template”</li>
            <li>b) If you would rather use one of our existing templates follow instructions for “Select Project Template”</li>
            </ul>
          </li>
        </ol>
        </div>
        <div id="buttons">
        <div className="menu-item">
          <PlusCircleFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/choose-template-route">
              Create new project
            </NavLink>
          </Button>
        </div>

        <div className="menu-item">
          <FolderFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/current-projects">
              Existing Projects
            </NavLink>
          </Button>
        </div>
        <div className="menu-item">
          <ArchiveFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/archived-projects">
              Archived Projects
            </NavLink>
          </Button>
        </div>
        <div className="menu-item">
          <ChatSquareTextFill size={90} />
              <Button variant="dark">
                <NavLink className="nav-link" to="/ReviewTool">
                  Review Tool
                </NavLink>
              </Button>
      
        </div>
        <div className="menu-item">
          <PersonFill size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/userSearch">
              UserSearch
            </NavLink>
          </Button>
        </div>
        </div>
      </main>
    </PageContainer>
  );
};

export default HomePage;
