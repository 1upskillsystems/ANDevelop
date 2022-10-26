import React, { useContext } from "react";
import { ProjectMembersContext } from "../contexts/projectMembersContext";

function SelectUser() {
    const users = useContext(ProjectMembersContext)

    return <h2>Select user - {users}</h2>
}

export default SelectUser;