import React, { useContext, useEffect, useState } from "react";
import PageContainer from "./PageContainer";
import { useLocation } from "react-router-dom";
import AddRoleButtons from "./AddRoleButtons";
import { useForm } from "react-hook-form";
import moment from "moment";

import "./css/createProject.css";

const CreateProject = () => {
  const {
    state: { templateInfo },
  } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm();

  // let [template, setTemplate] = useState({});
  let [members, setMembers] = useState([
    {
      role: "Scrum Master",
      name: null,
      individual_role: null,
      clubhouse: null,
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

  let membersAllAdded = false;
  for (let index = 0; index < members.length; index++) {
    if (!!members[index].name) membersAllAdded = true;
    else {
      membersAllAdded = false;
      break;
    }
  }

  // let [projectInfo, setProjectInfo] = useState({
  //   project_id: null, // to sort rng
  //   template_id: null, // updates in useEffect below with data from 'template' state
  //   project_status: 0, // 0 initiated, 1 active, 2 archived
  //   project_progress: null, // seek clarification here
  //   time_start: null, // will set when start button clicked
  //   time_deadline: null, // set in template window component
  //   team_members: members,
  //   team_size: members.length,
  // });

  // useEffect(() => {
  //   setTemplate(templateInfo);
  //   // setProjectInfo((prev) => ({ ...prev, ["template_id"]: template.id }));
  // }, []);

  // // console.log(templateInfo, template, projectInfo);

  const onSubmit = (e) => {
    const time_start = new Date().valueOf();
    console.log("This will update the DB", {
      project_id: null, // to sort rng
      template_id: templateInfo.id,
      project_status: 0, // 0 initiated, 1 active, 2 archived
      project_progress: null, // seek clarification here
      time_start,
      time_deadline: new Date(e.deadline).getTime(),
      team_members: members,
      team_size: members.length,
    });
  };

  return (
    <PageContainer
      pageTitle="Create Project"
      buttonText="Back"
      buttonTo="/choose-existing-template"
    >
      <div id="display-container">
        <div id="left-content">
          <h2 id="create-proj-title">Add team members</h2>
          <AddRoleButtons members={members} setMembers={setMembers} />
        </div>

        <div id="right-sidebar-content">
          <h3 id="project-name">{templateInfo?.template_name}</h3>
          <p id="description">{templateInfo?.description}</p>
          <ul>
            <li>
              Suggested time:{" "}
              <span className="bold-font">
                {templateInfo.time_esitmate} days
              </span>
            </li>
            <li>
              Suggested team size:{" "}
              <span className="bold-font">
                {templateInfo.team_estimate} people
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
                Start Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default CreateProject;
