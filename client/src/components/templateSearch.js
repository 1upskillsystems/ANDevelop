import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { TemplateContext } from "../contexts/templateContext";
import PageContainer from "./PageContainer";
import Button from "react-bootstrap/Button";
import "./css/templateSearch.css";

function TemplateSearch() {
  const temp = useContext(TemplateContext);
  let [templateObj, setTemplateObj] = useState([]);

  return (
    <PageContainer
      pageTitle="Template select"
      buttonText="Back"
      buttonTo="/choose-template-route"
    >
      <section className="template-search">
        <h2>Please select a template to start your project with</h2>
        <div className="template-search-viewport">
          <ul className="template-search-list">
            {temp.templates.map((elem, i) => {
              return (
                <li
                  className={`template-search-item ${
                    templateObj.id == elem.id ? "selected" : ""
                  }`}
                  onClick={() => setTemplateObj((templateObj = elem))}
                  key={i}
                >
                  <h4>{elem.template_name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="template-search-details">
          <div className={`wrapper${templateObj == 0 ? " hidden" : ""}`}>
            <h2>{templateObj.template_name}</h2>
            <p>{templateObj.desciption}</p>
            <p>
              <strong>Difficulty:</strong> {templateObj.difficulty_rating}
            </p>
            <hr />
            <h2>Recommendations</h2>
            <p>
              <strong>Expected duration:</strong> {templateObj.time_esitmate}
            </p>
            <p>
              <strong>Team size:</strong> {templateObj.team_estimate}
            </p>
          </div>
        </div>
        <footer>
          <NavLink to={"/create-project"} state={{ templateInfo: templateObj }}>
            <Button
              variant="dark"
              disabled={templateObj == 0 ? "disabled" : ""}
            >
              Assemble project
            </Button>
          </NavLink>
        </footer>
      </section>
    </PageContainer>
  );
}

export default TemplateSearch;
