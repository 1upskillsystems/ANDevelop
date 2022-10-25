import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Home</h2>
      <div id="menu-container">
        <Button>Existing Projects</Button>
        <Button>
          <NavLink className="nav-link" to="/choose-template-route">
            Create new project
          </NavLink>
        </Button>
        <Button>Project Reviews</Button>
        <Button>Archived Projects</Button>
        <Button>User Search</Button>
      </div>
    </div>
  );
};

export default HomePage;
