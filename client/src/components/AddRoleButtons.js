import React, { useContext } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import "./css/roleButton.css";
import Background from "../koala.jpg";

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
      <div
        id="display-picture"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div>
        <p>{role}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

const AddRoleButtons = ({ members, setMembers }) => {
  return (
    <div id="select-users-container">
      {members.map((member, index) => {
        if (!member.name)
          return (
            <div key={index}>
              <RoleButton red text={`Add ${member.role}`} key={index} />
              {index < 3 && <hr className="role-button-separator" />}
            </div>
          );
        else
          return (
            <div key={index}>
              <AssignedRole role={member.role} name={member.name} key={index} />
              {index < 3 && <hr className="role-button-separator" />}
            </div>
          );
      })}

      <RoleButton text="Add Additional Developers" />
    </div>
  );
};

export default AddRoleButtons;
