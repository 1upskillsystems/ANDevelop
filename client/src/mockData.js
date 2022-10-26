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
    template_id: 1,
    project_status: 1,
    project_progress: "int1",
    time_start: "2022.08.10",
    time_deadline: "2022.12.10",
    team_size: "int1",
    team_members: [{ user_id: "int1", project_role: "str1" }],
  },
  {
    id: 2,
    template_id: 2,
    project_status: 1,
    project_progress: "int2",
    time_start: "2022.10.10",
    time_deadline: "2022.12.10",
    team_size: "int2",
    team_members: [{ user_id: "int2", project_role: "str2" }],
  },
];

export const templates = [
  {
    id: 1,
    template_name: "Cool Project",
    desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    difficulty_rating: "3",
    time_esitmate: "int1",
    team_estimate: "int1",
  },
  {
    id: 2,
    template_name: "Serious Project",
    desciption: "Quis hendrerit dolor magna eget est lorem ipsum dolor. Morbi blandit cursus risus at ultrices. In egestas erat imperdiet sed euismod nisi. Pulvinar sapien et ligula ullamcorper malesuada proin. Fames ac turpis egestas maecenas pharetra convallis posuere. Eget aliquet nibh praesent tristique magna sit amet purus. Suscipit tellus mauris a diam maecenas sed.",
    difficulty_rating: "5",
    time_esitmate: "int2",
    team_estimate: "int2",
  },
];
