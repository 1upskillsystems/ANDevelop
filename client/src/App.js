import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TemplateRoute from "./components/templateRoute";
import TemplateSearch from "./components/templateSearch";
import CreateProject from "./components/CreateProject2";
import CurrentProjects from "./components/currentProjects";
import { 
  UserContext, 
  useUserContextValue 
} from "./contexts/userContext";
import {
  ProjectContext,
  useProjectContextValue,
} from "./contexts/projectContext";
import {
  TemplateContext,
  useTemplateContextValue,
} from "./contexts/templateContext";
import "./App.css";
import UserSearch from "./components/userSearch";

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
              <Route
                path="/current-projects"
                element={<CurrentProjects />}
              ></Route>
              <Route
                path="/userSearch"
                element={<UserSearch />}
              ></Route>
              <Route 
                path="/choose-existing-template" 
                element={<TemplateSearch />}
              />
              <Route
                path="/create-project"
                element={<CreateProject />}
              />
            </Routes>
          </main>
        </TemplateContext.Provider>
      </ProjectContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
