import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentProjects from "./components/currentProjects";
import CreateProjectButton from "./components/newProjectButton";
import TemplateRoute from "./components/templateRoute";
import { UserContext, useUserContextValue } from "./contexts/userContext";
import {
  ProjectContext,
  useProjectContextValue,
} from "./contexts/projectContext";
import {
  TemplateContext,
  useTemplateContextValue,
} from "./contexts/templateContext";
import Test from './Test'

const App = () => {
  const loginContextValue = useUserContextValue();
  const projectContextValue = useProjectContextValue();
  const templateContextValue = useTemplateContextValue();

  return (
    <UserContext.Provider value={loginContextValue}>
      <ProjectContext.Provider value={projectContextValue}>
        <TemplateContext.Provider value={templateContextValue}>
          <main>
            <header>
              <h1>ANDevelop</h1>
              <CreateProjectButton />
            </header>
            <Routes>
              <Route exact path="/" element={<CurrentProjects />} />
              <Route
                path="/choose-template-route"
                element={<TemplateRoute />}
              />
            </Routes>
          </main>
          <Test />
        </TemplateContext.Provider>
      </ProjectContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
