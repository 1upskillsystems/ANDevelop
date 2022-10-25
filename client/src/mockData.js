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
    team_members: [{ user_id: "int", project_role: "str" }],
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
    template_name: "str",
    desciption: "str",
    difficulty_rating: "int",
    time_esitmate: "int",
    team_estimate: "int",
  },
  {
    id: 2,
    template_name: "str",
    desciption: "str",
    difficulty_rating: "int",
    time_esitmate: "int",
    team_estimate: "int",
  },
];
