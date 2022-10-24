import { createContext, useEffect, useState } from "react";

const dummyData = {
  template_id: 111,
  template_name: "Template 1",
  desciption: "The first template",
  difficulty_rating: 4,
  time_esitmate: 10,
  team_estimate: 6,
};

const templateContextDefaultValue = {
  templateId: null,
  templateName: "",
  desciption: "",
  difficultyRating: null,
  timeEstimate: null,
  teamEstimate: null,
};

export const TemplateContext = createContext(templateContextDefaultValue);

export function useTemplateContextValue() {
  const [templateId, setTemplateId] = useState();
  const [templateName, setTemplateName] = useState("");
  const [desciption, setDesciption] = useState("");
  const [difficultyRating, setDifficultyRating] = useState();
  const [timeEstimate, setTimeEstimate] = useState();
  const [teamEstimate, setTeamEstimate] = useState();

  useEffect(() => {
    // function to call data from DB
    const templateInfo = dummyData; // TODO - get values from DB

    setTemplateId(templateInfo.template_id);
    setTemplateName(templateInfo.template_name);
    setDesciption(templateInfo.desciption);
    setDifficultyRating(templateInfo.difficulty_rating);
    setTimeEstimate(templateInfo.time_esitmate);
    setTeamEstimate(templateInfo.team_estimate);
  }, []);

  return {
    templateId,
    templateName,
    desciption,
    difficultyRating,
    timeEstimate,
    teamEstimate,
  };
}
