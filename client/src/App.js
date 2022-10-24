import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentProjects from "./components/currentProjects";
import CreateProjectButton from "./components/newProjectButton";
import TemplateRoute from "./components/templateRoute";
 
const App = () => {
  return (
    <main>
      <header>
        <h2>Placeholder</h2>
        <CreateProjectButton />
      </header>
      <Routes>
        <Route exact path="/" element={<CurrentProjects />} />
        <Route path="/choose-template-route" element={<TemplateRoute />} />
      </Routes>
    </main>
  );
};
 
export default App;