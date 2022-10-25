import React from "react";
<<<<<<< HEAD
import { Form, Route, Routes } from "react-router-dom";
import CurrentProjects from "./components/currentProjects";
import CreateProjectButton from "./components/newProjectButton";
import TemplateRoute from "./components/templateRoute";
import Userlist from "./components/userSearch";
 
=======
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TemplateRoute from "./components/templateRoute";
import TemplateSearch from "./components/templateSearch";
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
import "./App.css";
import CurrentProjects from "./components/currentProjects";

>>>>>>> main
const App = () => {
  const loginContextValue = useUserContextValue();
  const projectContextValue = useProjectContextValue();
  const templateContextValue = useTemplateContextValue();

  return (
<<<<<<< HEAD
    <main>
      <header>
        <h1>ANDevelop</h1>
        <CreateProjectButton />
      </header>
      <Routes>
        <Route exact path="/" element={<CurrentProjects />} />
        <Route path="/choose-template-route" element={<TemplateRoute />} />
      </Routes>
      <div>
      <Userlist/>
      </div>
    </main>

=======
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
                path="/choose-existing-template" 
                element={<TemplateSearch />}
              />
            </Routes>
          </main>
          <Test />
        </TemplateContext.Provider>
      </ProjectContext.Provider>
    </UserContext.Provider>
>>>>>>> main
  );
};
 
export default App;export default App;
