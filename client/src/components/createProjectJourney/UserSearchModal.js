import React from "react";
import UserSearch from "../userSearch";
import { XCircle } from "react-bootstrap-icons";

import "../css/userSearchModal.css";

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
      name: `${user?.name}`,
      individual_role: user?.individual_role,
      clubs_house: user?.clubs_house,
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
    <div
      id="add-user-modal-background"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpenModal(false);
      }}
    >
      <div id="add-user-modal">
        <button
          id="modal-close-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <XCircle size={25} color="black" />
        </button>
        <UserSearch title={`Add ${role}`} handleClick={onClick} />
      </div>
    </div>
  );
};

export default UserSearchModal;
