import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PageContainer from "./PageContainer";

const projects = [{
  id: 1,
  template_id: "int",
  project_status: "int",
  project_progress: "int",
  time_start: "int",
  time_deadline: "int",
  team_size: "int",
  reviews: ["Really good", " Terrible"],
  team_members: [{ user_id: "int", project_role: "str" }],
},
{
  id: 2,
  template_id: "int",
  project_status: "int",
  project_progress: "int",
  time_start: "int",
  time_deadline: "int",
  team_size: "int",
  reviews: ["Best projct ever!", " Awesome"],
  team_members: [{ user_id: "int", project_role: "str" }],
},
];


function ProjectReview() {
  return (
    <PageContainer buttonText="Close" buttonTo="/">
      <section>
        <h1> {projects[1].reviews} </h1>
      </section>
    </PageContainer>
  );
}

export default ProjectReview;