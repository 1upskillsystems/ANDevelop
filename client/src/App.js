import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentProjects from "./components/currentProjects";
import HomePage from "./components/HomePage";
import TemplateRoute from "./components/templateRoute";

const App = () => {
  return (
    <main>
      <header>
        <h1>ANDevelop</h1>
      </header>
      <HomePage />
      <Routes>
        <Route exact path="/" element={<CurrentProjects />} />
        <Route path="/choose-template-route" element={<TemplateRoute />} />
      </Routes>
    </main>
  );
};

export default App;
