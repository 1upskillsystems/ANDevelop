import { createContext, useEffect, useState } from "react";

const dummyData = {
  ID: "id",
  first_name: "Jane",
  last_name: "Doe",
  clubs_house: "Wangari",
  individual_role: "Developer",
  projects: [
    { project_id: 111, role: 2 },
    { project_id: 222, role: 2 },
  ],
};

// Set default values
const userContextDefaultValue = {
  id: "",
  firstName: "",
  lastName: "",
  clubHouse: "",
  individualRole: "",
  projects: [],
};

export const UserContext = createContext(userContextDefaultValue);

export function useUserContextValue() {
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clubHouse, setClubHouse] = useState("");
  const [individualRole, setIndividualRole] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // function to call data from DB
    const userInfo = dummyData; // TODO - get values from DB

    setId(userInfo.ID);
    setFirstName(userInfo.first_name);
    setLastName(userInfo.last_name);
    setClubHouse(userInfo.clubs_house);
    setIndividualRole(userInfo.individual_role);
    setProjects(userInfo.projects);
  }, []);

  return {
    id,
    firstName,
    lastName,
    clubHouse,
    individualRole,
    projects,
  };
}
