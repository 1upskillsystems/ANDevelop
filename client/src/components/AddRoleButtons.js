import React, { useContext } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import "./css/roleButton.css";

const RoleButton = ({ text, red }) => {
  const Icon = (props) =>
    red ? (
      <PlusCircleFill {...props} color="#cf2a27" id="red-button" />
    ) : (
      <Plus {...props} color="black" id="white-button" />
    );

  return (
    <button onClick={() => console.log(text)} id="add-role-button">
      <Icon size={50} className="add-button" />
      <p id="add-role-text">{text}</p>
    </button>
  );
};

const AssignedRole = ({ role, name }) => {
  return (
    <div id="assigned-role-container">
      <div id="display-picture"/>
      <div>
        <p>{role}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

const AddRoleButtons = ({ members }) => {
  let scrumMasterAssigned = false;
  let techLeadAssigned = false;
  let developerAssigned = false;

  for (let index = 0; index < members?.length; index++) {
    scrumMasterAssigned = members[index]?.project_role === "scrum_master";
    techLeadAssigned = members[index]?.project_role === "tech_lead";
    developerAssigned = members[index]?.project_role === "developer";
  }

  return (
    <>
      {scrumMasterAssigned ? (
        <AssignedRole role="Scrum Master" name="todo" />
      ) : (
        <RoleButton red text="Add Scrum Master" />
      )}

      <hr className="role-button-separator" />

      {techLeadAssigned ? (
        <AssignedRole role="Tech Lead" name="todo" />
      ) : (
        <RoleButton red text="Add Tech Lead" />
      )}

      <hr className="role-button-separator" />

      {developerAssigned ? (
        <AssignedRole role="Developer" name="todo" />
      ) : (
        <RoleButton red text="Add Developer" />
      )}

      <RoleButton text="Add Additional Developers" />
    </>
  );
};

export default AddRoleButtons;
