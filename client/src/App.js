import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import CurrentProjects from "./components/currentProjects";
import CreateProjectButton from "./components/newProjectButton";
import TemplateRoute from "./components/templateRoute";
import Userlist from "./components/userSearch";
 
const App = () => {
  return (
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

  );
};
 
export default App;