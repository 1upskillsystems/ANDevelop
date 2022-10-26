import React, { useContext, useEffect, useState } from "react";
import PageContainer from "./PageContainer";
import { ChevronLeft } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";
import AddRoleButtons from "./AddRoleButtons";
import { TemplateContext } from "../contexts/templateContext";
import { ProjectContext } from "../contexts/projectContext";

import "./css/createProject.css";

const CreateProject = () => {
  const { templates } = useContext(TemplateContext);
  const { projects } = useContext(ProjectContext);

  const {
    state: { templateInfo },
  } = useLocation();

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

  let [template, setTemplate] = useState({});
  let [members, setMember] = useState([
    {
      role: "Scrum Master",
      name: "Someone",
      individual_role: "Some Role",
      clubhouse: "Clubhouse",
    },
    {
      role: "Product Owner",
      name: null,
      individual_role: null,
      clubhouse: null,
    },
    {
      role: "Tech Lead",
      name: null,
      individual_role: null,
      clubhouse: null,
    },
    {
      role: "Developer",
      name: null,
      individual_role: null,
      clubhouse: null,
    },
  ]);

  let [projectInfo, setProjectInfo] = useState({
    project_id: null, // to sort rng
    template_id: null, // updates in useEffect below with data from 'template' state
    project_status: 0, // 0 initiated, 1 active, 2 archived
    project_progress: null, // seek clarification here
    time_start: null, // will set when start button clicked
    time_deadline: null, // set in template window component
    team_members: members,
    team_size: members.length,
  });

  useEffect(() => {
    setTemplate(templateInfo);
    setProjectInfo((prev) => ({ ...prev, ["template_id"]: template.id }));
  }, []);

  console.log(templateInfo, template, projectInfo);

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
          <h3 id="project-name">{templateInfo?.template_name}</h3>
          <p id="description">{templateInfo?.description}</p>
          <div className="input-field">
            <label>Sprint duration &#40;weeks&#41;&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div className="input-field">
            <label className="input-label">Number of sprints&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div class="input-field">
            <label>Set deadline&#58;</label>
            <input type="date" className="input date-input-field" />
          </div>
          <div>
            <button disabled onClick={() => console.log("clicked")}>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CreateProject;
