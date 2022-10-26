import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PageContainer from "./PageContainer";
import SelectUser from "./selectUser";
import { ProjectMembersContext } from "../contexts/projectMembersContext";
import Button from "react-bootstrap/Button";
import "./css/createProject.css";

function CreateProject(props) {
    const location = useLocation();
    const { state } = location;
    
    let [template, setTemplate] = useState({});
    let [members, setMember] = useState([
        {
            "role": "Scrum Master",
            "name": "Someone",
            "individual_role": "Some Role",
            "clubhouse": "Clubhouse",
        }, {
            "role": "Product Owner",
            "name": null,
            "individual_role": null,
            "clubhouse": null,
        }, {
            "role": "Tech Lead",
            "name": null,
            "individual_role": null,
            "clubhouse": null,
        }, {
            "role": "Developer",
            "name": null,
            "individual_role": null,
            "clubhouse": null,
        }, 
    ]);
    
    let [projectInfo, setProjectInfo] = useState({
        "project_id": null, // to sort rng
        "template_id": null, // updates in useEffect below with data from 'template' state
        "project_status": 0, // 0 initiated, 1 active, 2 archived
        "project_progress": null, // seek clarification here
        "time_start": null, // will set when start button clicked
        "time_deadline": null, // set in template window component
        "team_members": members,
        "team_size": members.length
    });

    useEffect(() => {
        setTemplate(template = state.templateInfo);
        setProjectInfo((prev) => {
            return {...prev, ["template_id"]: template.id}
        });
    }, []);

    return (
        <PageContainer
            pageTitle="Create project"
            buttonText="Back"
            buttonTo="/choose-existing-template"
        >
            <section className="create-project-overview">
                <div className="team-overview">
                    <header>
                        <h2>Add team members</h2>
                    </header>
                    <div>
                        <ProjectMembersContext.Provider value="test">
                            {/* <SelectUser />
                            <SelectUser /> */}
                        </ProjectMembersContext.Provider>
                        {members.map((role, i) => {
                            if (role.name != null) {
                                return (
                                    <div className="member-select">
                                        <h4>{`${role.role}`}</h4>
                                        <h5>{`${role.name} (${role.individual_role} - ${role.clubhouse})`}</h5>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="member-select">
                                        <h4>{`Add ${role.role}`}</h4>
                                    </div>
                                );    
                            }
                        })}
                    </div>
                </div>
                <div className="template-overview">
                    <h2>{template.template_name}</h2>
                    <p>{template.desciption}</p>
                    <p><strong>Difficulty:</strong> {template.difficulty_rating}</p>
                    <hr />
                    <h2>Recommendations</h2>
                    <p><strong>Expected duration:</strong> {template.time_esitmate}</p>
                    <p><strong>Team size:</strong> {template.team_estimate}</p>
                </div>
            </section>
        </PageContainer>
    );
};

export default CreateProject;