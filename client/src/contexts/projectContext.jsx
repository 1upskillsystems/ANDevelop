import { createContext, useEffect, useState } from "react";
import { projects as projectData } from "../mockData";

export const ProjectContext = createContext([]);

export function useProjectContextValue() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = projectData; // make call to DB
    setProjects(data);
  }, []);

  return {
    projects,
  };
}
