import React, { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import { ProjectContext } from "./contexts/projectContext";
import {
  TemplateContext,

} from "./contexts/templateContext";

const Test = () => {
  const user = useContext(UserContext);
  const project = useContext(ProjectContext);
  const template = useContext(TemplateContext);

  console.log("user =", user);
  console.log("project =", project);
  console.log("template =", template);

  return (
    <></>
  );
};

export default Test;
