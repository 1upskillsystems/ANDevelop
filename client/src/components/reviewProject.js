import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PageContainer from "./PageContainer";
import { StarFill} from "react-bootstrap-icons";

const projects = [{
  id: 1,
  template_id: "Koala",
  project_status: "int",
  project_progress: "int",
  time_start: "int",
  time_deadline: "int",
  team_size: "int",
  reviews: ["Really good concept but a bit limited, devs had to do a lot of fiddly UX work rather than expanding the project in more exciting ways" ],
  team_members: [{ user_id: "int", project_role: "str" }],
},
{
  id: 2,
  template_id: "AND Develop",
  project_status: "int",
  project_progress: "int",
  time_start: "int",
  time_deadline: "int",
  team_size: "int",
  reviews: ["Very fun Project with lots of use of React, and some non-relational databases" ],
  team_members: [{ user_id: "int", project_role: "str" }],
},
];


function ProjectReview() {
  return (
    <PageContainer buttonText="Close" buttonTo="/ReviewTool">
      <section>
        <h1> 
          {projects[0].template_id} <StarFill size={30}/> <StarFill size={30}/> <StarFill size={30}/> 
        </h1>
        <h1> {projects[0].reviews}</h1>
        
        <h1> 
          {projects[1].template_id} <StarFill size={30}/> <StarFill size={30}/> <StarFill size={30}/> <StarFill size={30}/> <StarFill size={30}/> 
        </h1>
        <h1> {projects[1].reviews}</h1>
      </section>
    </PageContainer>
  );
}

export default ProjectReview;