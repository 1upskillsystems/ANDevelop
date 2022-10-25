import React, { useContext } from "react";
import PageContainer from "./PageContainer";
import { ChevronLeft } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import AddRoleButtons from "./AddRoleButtons";
import { TemplateContext } from "../contexts/templateContext";
import { ProjectContext } from "../contexts/projectContext";

import "./css/SelectProjectTemplate.css";

const SelectProjectTemplate = () => {
  const { templates } = useContext(TemplateContext);
  const { projects } = useContext(ProjectContext);

  const templateId = 1; // TODO this will be passed in from previous page somehow

  // find template
  let thisTemplate;
  for (let index = 0; index < templates.length; index++) {
    if (templates[index].id === templateId) {
      thisTemplate = templates[index];
      break;
    }
  }
  // find project
  let thisProject;
  for (let index = 0; index < projects.length; index++) {
    if (projects[index].id === templateId) {
      thisProject = projects[index];
      break;
    }
  }

  return (
    <PageContainer pageTitle="Create Project">
      <div id="display-container">
        <div id="left-content">
          <div id="title-row">
            <NavLink id="back-button" to="page that sent us here">
              <ChevronLeft size={30} color="black" />
              <span id="back-button-span">Back</span>
            </NavLink>
            <h2 id="create-proj-title">Add team members</h2>
          </div>
          <AddRoleButtons members={thisProject?.team_members} />
        </div>

        <div id="right-sidebar-content">
          <h3 id="project-name">{thisTemplate?.template_name}</h3>
          <p id="description">{thisTemplate?.description}</p>
          <div className="input-field">
            <label>Sprint duration &#40;weeks&#41;&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div className="input-field">
            <label className="input-label">Number of sprints&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div id="deadline-input-field">
            <p>Set deadline&#58;</p>
            <input type="date" className="input" />
          </div>
          <div>
            <button disabled onClick={console.log("clicked")}>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SelectProjectTemplate;
