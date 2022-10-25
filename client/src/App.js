import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
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
import Test from "./Test";

const App = () => {
  const loginContextValue = useUserContextValue();
  const projectContextValue = useProjectContextValue();
  const templateContextValue = useTemplateContextValue();

  return (
    <UserContext.Provider value={loginContextValue}>
      <ProjectContext.Provider value={projectContextValue}>
        <TemplateContext.Provider value={templateContextValue}>
          <main>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
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
