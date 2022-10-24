import { createContext, useEffect, useState } from "react";

const dummyData = {
  project_id: 1234,
  template_id: 5678,
  project_status: 0,
  project_progress: 2,
  time_start: 0,
  time_deadline: 5,
  team_size: 10,
  team_members: [{ user_id: 1, project_role: "Developer" }],
};

const projectContextDefaultValue = {
  projectId: null,
  templateId: null,
  projectStatus: null,
  projectProgress: null,
  timeStart: null,
  timeDeadline: null,
  teamSize: null,
  teamMembers: [],
};

export const ProjectContext = createContext(projectContextDefaultValue);

export function useProjectContextValue() {
  const [projectId, setProjectId] = useState();
  const [templateId, setTemplateId] = useState();
  const [projectStatus, setProjectStatus] = useState();
  const [projectProgress, setProjectProgress] = useState();
  const [timeStart, setTimeStart] = useState();
  const [timeDeadline, setTimeDeadline] = useState();
  const [teamSize, setTeamSize] = useState();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // function to call data from DB
    const projectInfo = dummyData; // TODO - get values from DB

    setProjectId(projectInfo.project_id);
    setTemplateId(projectInfo.template_id);
    setProjectStatus(projectInfo.project_status);
    setProjectProgress(projectInfo.project_progress);
    setTimeStart(projectInfo.time_start);
    setTimeDeadline(projectInfo.time_deadline);
    setTeamSize(projectInfo.team_size);
    setTeamMembers(projectInfo.team_members);
  }, []);

  return {
    projectId,
    templateId,
    projectStatus,
    projectProgress,
    timeStart,
    timeDeadline,
    teamSize,
    teamMembers,
  };
}
