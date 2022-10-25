import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function CurrentProjects() {
  return (
    <section>
      <NavLink to="/">
        <Button variant="dark">Close</Button>
      </NavLink>
      <article>A live project will be displayed here</article>
      <article>A live project will be displayed here</article>
      <article>A live project will be displayed here</article>
    </section>
  );
}

export default CurrentProjects;
