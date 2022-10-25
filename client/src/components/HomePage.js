import React from "react";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <div id="menu-container">
        <Button>Existing Projects</Button>
        <Button>Cretate New Project</Button>
        <Button>Project Reviews</Button>
        <Button>Archived Projects</Button>
        <Button>User Search</Button>
      </div>
    </div>
  );
};

export default HomePage;
