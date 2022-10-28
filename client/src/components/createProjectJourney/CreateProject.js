import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";

import PageContainer from "../PageContainer";
import AddRoleButtons from "./AddRoleButtons";

import "../css/createProject.css";

const CreateProject = () => {
  const {
    state: { templateInfo },
  } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm();

  let [members, setMembers] = useState([
    {
      role: "Scrum Master",
      name: null,
      individual_role: null,
      clubs_house: null,
    },
    {
      role: "Product Owner",
      name: null,
      individual_role: null,
      clubs_house: null,
    },
    {
      role: "Tech Lead",
      name: null,
      individual_role: null,
      clubs_house: null,
    },
    {
      role: "Developer",
      name: null,
      individual_role: null,
      clubs_house: null,
    },
  ]);

  let membersAllAdded = false;
  for (let index = 0; index < members.length; index++) {
    if (!!members[index].name) membersAllAdded = true;
    else {
      membersAllAdded = false;
      break;
    }
  }

  const onSubmit = async (e) => {
    const time_start = new Date().valueOf();
    const time_deadline = new Date(e.deadline).getTime();

    const projectToAdd = {
      project_id: null,
      template_id: templateInfo?.template_id,
      project_name: templateInfo?.template_name,
      project_desciption: templateInfo?.desciption,
      project_status: 1,
      project_progress: null,
      time_start,
      time_e: time_deadline - time_start,
      time_deadline,
      team_members: members,
      team_size: members.length,
    };

    console.log(projectToAdd);

    await fetch("http://localhost:5001/project/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectToAdd),
    }).catch((error) => {
      window.alert(error);
      console.log(error);
      return;
    });
  };

  return (
    <PageContainer
      pageTitle="Create Project"
      buttonText="Back"
      buttonTo="/choose-existing-template"
      noPadding
    >
      <div id="display-container">
        <div id="left-content">
          <h2 id="create-proj-title">Add team members</h2>
          <AddRoleButtons members={members} setMembers={setMembers} />
        </div>

        <div id="right-sidebar-content">
          <h3 id="project-name">{templateInfo?.template_name}</h3>
          <p id="description">{templateInfo?.desciption}</p>
          <ul>
            <li>
              Suggested time:{" "}
              <span className="bold-font">
                {Math.round(templateInfo.time_esitmate / 86400)} days
              </span>
            </li>
            <li>
              Suggested team size:{" "}
              <span className="bold-font">
                {templateInfo.team_estimate} people
              </span>
            </li>
            <li>
              Difficulty rating:{" "}
              <span className="bold-font">
                {templateInfo.difficulty_rating}/10
              </span>
            </li>
          </ul>
          <form>
            {/* <div className="input-field">
            <label>Sprint duration &#40;weeks&#41;&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div className="input-field">
            <label className="input-label">Number of sprints&#58;</label>
            <input className="number-input-field input" type="number" />
          </div> */}
            <div className="input-field">
              <label htmlFor="deadline">Set deadline&#58;</label>
              <input
                type="date"
                id="deadline"
                className="input date-input-field"
                name="deadline"
                min={moment().format("YYYY-MM-DD")}
                {...register("deadline", { required: true })}
              />
            </div>
            <div>
              <button
                type="submit"
                id="create-proj-submit-button"
                disabled={!membersAllAdded || !isDirty}
                onClick={handleSubmit(onSubmit)}
              >
                <NavLink className="nav-link" to="/add-project">
                  Start Project
                </NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default CreateProject;
