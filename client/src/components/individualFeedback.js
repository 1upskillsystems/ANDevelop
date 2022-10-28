import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PageContainer from "./PageContainer";
import { Person } from "react-bootstrap-icons";

const users = [
    {
      id: 1,
      first_name: "Piper ",
      last_name: "str",
      clubs_house: "str",
      individual_role: "str",
      reviews: "Very knowlegable about html",
      projects: [
        { project_id: "int", role: "int" },
        { project_id: "int", role: "int" },
      ],
    },
    {
      id: 2,
      first_name: "Dave ",
      last_name: "str",
      clubs_house: "str",
      individual_role: "str",
      reviews:"great communicator",
      projects: [
        { project_id: "int", role: "int" },
        { project_id: "int", role: "int" },
      ],
    },
  ];


function IndividualFeedback() {
  return (
    <PageContainer buttonText="Close" buttonTo="/ReviewTool">
      <section>

        <Person size={50}/> <h3> {users[0].first_name}: {users[0].reviews} </h3>

        <Person size={50}/> <h3> {users[1].first_name}: {users[1].reviews} </h3>
      </section>
    </PageContainer>
  );
}

export default IndividualFeedback;