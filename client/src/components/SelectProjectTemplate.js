import React from "react";
import "./css/SelectProjectTemplate.css";
import GlobalContainer from "./GlobalContainer";

const SelectProjectTemplate = () => {
  return (
    <GlobalContainer pageTitle="Create Project">
      <div id="display-container">
        <div id="left-content">
          <p>title</p>
          <p>content</p>
        </div>

        <div id="right-sidebar-content">
          <h3 id="project-name">Project/Template Name</h3>
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="input-field">
            <label>Sprint duration &#40;weeks&#41;&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div className="input-field">
            <label className="input-label">Number of sprints&#58;</label>
            <input className="number-input-field input" type="number" />
          </div>
          <div id="deadline-input-field">
            <p>Set deadline&#58;</p>
            <input type="date" className="input" />
          </div>
          <div>
            <button disabled onClick={console.log("clicked")}>
              Start Project
            </button>
          </div>
        </div>
      </div>
    </GlobalContainer>
  );
};

export default SelectProjectTemplate;
