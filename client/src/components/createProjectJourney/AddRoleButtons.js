import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import Background from "../../assets/koala.jpg";
import UserSearchModal from "./UserSearchModal";
import "../css/roleButton.css";

const RoleButton = ({ red, setMembers, members, role }) => {
  const [openModal, setOpenModal] = useState(false);

  const Icon = (props) =>
    red ? (
      <PlusCircleFill {...props} color="#ff0c04" id="red-button" />
    ) : (
      <Plus {...props} color="black" id="white-button" />
    );

  return (
    <>
      <UserSearchModal
        {...{ setMembers, members, setOpenModal, openModal, role }}
      />
      <button onClick={() => setOpenModal(true)} id="add-role-button">
        <Icon size={50} className="add-button" />
        <p id="add-role-text">Add {role}</p>
      </button>
    </>
  );
};

const AssignedRole = ({ setMembers, members, role, name }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="assigned-role-container">
      <UserSearchModal
        {...{ setMembers, members, setOpenModal, openModal, role }}
      />
      <div id="assigned-role-user">
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
      <button onClick={() => setOpenModal(true)} id="change-user-button">
        Change {role}
      </button>
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
              <RoleButton
                red
                key={index}
                setMembers={setMembers}
                members={members}
                role={member.role}
              />
              {index < 3 && <hr className="role-button-separator" />}
            </div>
          );
        else
          return (
            <div key={index}>
              <AssignedRole
                role={member.role}
                name={member.name}
                key={index}
                setMembers={setMembers}
                members={members}
              />
              {index < 3 && <hr className="role-button-separator" />}
            </div>
          );
      })}

      {!!members[3].name && (
        <RoleButton
          setMembers={setMembers}
          members={members}
          role="Additional Developers"
        />
      )}
    </div>
  );
};

export default AddRoleButtons;
