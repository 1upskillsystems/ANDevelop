import React, { useContext } from "react";
import Accordion from 'react-bootstrap/Accordion';
import PageContainer from "./PageContainer";
import { ProjectContext } from "../contexts/projectContext";
import { TemplateContext } from "../contexts/templateContext";
import Button from 'react-bootstrap/Button';
import Background from "../assets/koala.jpg"
import "./css/archivedProjects.css";

function ArchivedProjects() {
  const projects = useContext(ProjectContext);
  const templates = useContext(TemplateContext);
  
  // Used to search and return template obj through matching template ID
  const findTemplate = id => {
    let matchedTemp = null;
    templates.templates.forEach(elem => elem.template_id === id ? matchedTemp = elem : null);
    return matchedTemp;
  }

  return (
    <PageContainer 
      pageTitle="Archived projects"
      buttonText="Close" 
      buttonTo="/"
    >
      <section>
        <Accordion>
          {projects.projects.map((proj, i) => {
            
            if (proj.project_status === 2) {
              const currentTemplate = findTemplate(proj.template_id);

              return (
                <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header>
                      <div className="archived-projects-header-info">
                        <div className="project-header-info">
                          <div className="project-name">{proj.project_name}</div>
                          <div className="project-id">Project ID: {proj.project_id}</div>
                        </div>
                        <div className="progress-wrapper">
                          <div className="progress-bar" style={{width: "100%"}}></div>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><strong>Template used:</strong> {currentTemplate.template_name}</p>
                      <div className="project-date-info">
                        <div><p><strong>Date completed:</strong> {new Date(proj.time_deadline * 1000).toLocaleString()}</p></div>
                      </div>
                      <p><strong>Project Description:</strong></p>
                      <p>{currentTemplate.desciption}</p>
                      <p style={{textAlign: "right"}}><Button variant="dark" disabled>More Project Details</Button></p>
                      <hr />
                      <div className="project-members-wrap">
                        {proj.team_members.map((member, i) => {
                          let role = "Developer";
                          if (member.role) role = member.role;
                          return (
                            <article key={i}>
                              <h5>{role}</h5>
                              <div className="member">
                                <div
                                  className="member-img"
                                  style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <div className="member-details">
                                  <div><strong>{member.name}</strong></div>
                                  <div>({member.individual_role} - {member.clubs_house})</div>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
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

export default ArchivedProjects;
