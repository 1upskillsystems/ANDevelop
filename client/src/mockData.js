export const users = [
  {
    id: 1,
    first_name: "str",
    last_name: "str",
    clubs_house: "str",
    individual_role: "str",
    projects: [
      { project_id: "int", role: "int" },
      { project_id: "int", role: "int" },
    ],
  },
  {
    id: 2,
    first_name: "str",
    last_name: "str",
    clubs_house: "str",
    individual_role: "str",
    projects: [
      { project_id: "int", role: "int" },
      { project_id: "int", role: "int" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    template_id: "int",
    project_status: "int",
    project_progress: "int",
    time_start: "int",
    time_deadline: "int",
    team_size: "int",
    team_members: [{ user_id: "int", project_role: "tech_lead" }],
  },
  {
    id: 2,
    template_id: "int",
    project_status: "int",
    project_progress: "int",
    time_start: "int",
    time_deadline: "int",
    team_size: "int",
    team_members: [{ user_id: "int", project_role: "str" }],
  },
];

export const templates = [
  {
    id: 1,
    template_name: "Mock Template Name",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    difficulty_rating: "int1",
    time_esitmate: "int1",
    team_estimate: "int1",
  },
  {
    id: 2,
    template_name: "str2",
    description: "str2",
    difficulty_rating: "int2",
    time_esitmate: "int2",
    team_estimate: "int2",
  },
];
