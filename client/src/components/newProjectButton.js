import React from "react";
import { NavLink } from "react-router-dom";
 
// This will display the button to link/direct to choosing a pre-existing or creating a template
export default function CreateProjectButton() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/choose-template-route">
                        Create new project
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}