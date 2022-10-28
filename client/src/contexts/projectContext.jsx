import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext([]);

export function useProjectContextValue() {
  const [projects, setProjects] = useState([]);

  const baseURL = "http://localhost:5001/projects";
  const fetchProjects = async () => {
    const res = await fetch(baseURL);
    const projectList = await res.json();
    setProjects(projectList);
  };

  useEffect(() => {
    fetchProjects(); // make call to backend service
  }, []);

  return {
    projects,
  };
}
