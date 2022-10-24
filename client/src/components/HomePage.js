import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>
      <ListGroup horizontal>
        <ListGroup.Item>Existing Projects</ListGroup.Item>
        <ListGroup.Item>Cretate New Project</ListGroup.Item>
        <ListGroup.Item>Project Reviews</ListGroup.Item>
        <ListGroup.Item>Archived Projects</ListGroup.Item>
        <ListGroup.Item>User Search</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default HomePage;
