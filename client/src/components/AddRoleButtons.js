import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import "./css/roleButton.css";
import Background from "../koala.jpg";
import UserSearch from "./userSearch";

const UserSearchModal = ({
  setMembers,
  members,
  setOpenModal,
  openModal,
  role,
}) => {
  const onClick = (user) => {
    const newMember = {
      role,
      name: `${user?.first_name} ${user?.last_name}`,
      individual_role: user?.individual_role,
      clubhouse: user?.clubs_house,
    };

    if (role === "Additional Developers") {
      setMembers([...members, newMember]);
      setOpenModal(false);
    } else {
      let newMemberArray = [...members];
      const i = members.findIndex((member) => member.role === newMember.role);
      if (i !== -1) {
        newMemberArray[i] = newMember;
      }

      setMembers(newMemberArray);
      setOpenModal(false);
    }
  };

  if (!openModal) return null;
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
      >
        Close
      </button>
      <UserSearch handleClick={onClick} />
    </div>
  );
};

const RoleButton = ({ red, setMembers, members, role }) => {
  const [openModal, setOpenModal] = useState(false);

  const Icon = (props) =>
    red ? (
      <PlusCircleFill {...props} color="#cf2a27" id="red-button" />
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
              <AssignedRole role={member.role} name={member.name} key={index} />
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
