import React, { useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import PageContainer from "./PageContainer";
import { ProjectContext } from "../contexts/projectContext";
import { TemplateContext } from "../contexts/templateContext";
import "./css/currentProjects.css";

function CurrentProjects() {
  const projects = useContext(ProjectContext);
  const templates = useContext(TemplateContext);
  
  // Used to search and return template obj through matching template ID
  const findTemplate = id => {
    let matchedTemp = null;
    templates.templates.forEach(elem => elem.template_id === id ? matchedTemp = elem : null);
    return matchedTemp;
  }

  const calcTime = (started, deadline) => {
    const current = Math.floor(Date.now() / 1000);
    const total = +deadline - +started;
    const elaps = current - started;
    
    return Math.round((elaps / total) * 100) + "%";
  }

  return (
    <PageContainer 
      pageTitle="Active projects"
      buttonText="Close" 
      buttonTo="/"
    >
      <section>
        <Accordion>
          {projects.projects.map((proj, i) => {
            
            if (proj.project_status === 1) {
              const currentTemplate = findTemplate(proj.template_id);
              const progress = calcTime(proj.time_start, proj.time_deadline);

              return (
                <Accordion.Item eventKey="0" key={i}>
                    <Accordion.Header>
                      <div className="current-projects-header-info">
                        <div>Project name: {proj.project_name} - (id: {proj.project_id})</div>
                        <div>Template name: {currentTemplate.template_name}</div>
                        <div className="progress-wrapper">
                          <div className="progress-bar" style={{width: progress}}></div>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {currentTemplate.desciption}
                    </Accordion.Body>
                </Accordion.Item>
              );
            }
          })}
        </Accordion>
      </section>
    </PageContainer>
  );
}

export default CurrentProjects;
