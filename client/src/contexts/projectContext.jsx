import { createContext, useEffect, useState } from "react";
import { projects as mockData } from "../mockData";

export const ProjectContext = createContext([]);

export function useProjectContextValue() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = mockData; // make call to DB
    setProjects(data);
  }, []);

  return {
    projects,
  };
}
