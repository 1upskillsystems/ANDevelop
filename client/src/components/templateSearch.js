import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { TemplateContext } from "../contexts/templateContext";
import PageContainer from "./PageContainer";
import Button from "react-bootstrap/Button";
import "./css/templateSearch.css";

function TemplateSearch() {
  const { templates } = useContext(TemplateContext);
  let [templateObj, setTemplateObj] = useState();

  return (
    <PageContainer
      pageTitle="Template select"
      buttonText="Back"
      buttonTo="/choose-template-route"
    >
      <section className="template-search">
        <h2 id="template-search-heading">
          Please select a template to start your project with
        </h2>
        <div className="template-search-viewport">
          <ul className="template-search-list">
            {templates.map((elem, i) => (
              <li
                className={`template-search-item ${
                  templateObj?.id === elem.id ? "selected" : ""
                }`}
                onClick={() => setTemplateObj((templateObj = elem))}
                key={i}
              >
                <button>{elem.template_name}</button>
              </li>
            ))}
          </ul>
        </div>
        {!!templateObj && (
          <div className="template-search-details">
            <div className={`wrapper${templateObj === 0 ? " hidden" : ""}`}>
              <h2>{templateObj.template_name}</h2>
              <p>{templateObj.desciption}</p>
              <p>
                <strong>Difficulty:</strong> {templateObj.difficulty_rating}
              </p>
              <hr />
              <h2>Recommendations</h2>
              <p>
                <strong>Expected duration:</strong> {Math.round(templateObj.time_esitmate / 86400)} days
              </p>
              <p>
                <strong>Team size:</strong> {templateObj.team_estimate}
              </p>
            </div>
            <NavLink
              to={"/create-project"}
              state={{ templateInfo: templateObj }}
            >
              <Button
                variant="dark"
                disabled={templateObj === 0 ? "disabled" : ""}
              >
                Assemble project
              </Button>
            </NavLink>
          </div>
        )}
      </section>
    </PageContainer>
  );
}

export default TemplateSearch;
