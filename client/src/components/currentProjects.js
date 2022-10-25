import React from "react";
import { NavLink } from "react-router-dom";

function CurrentProjects() {
  return (
    <section>
      <NavLink to="/">
        <button>Close</button>
      </NavLink>
      <article>A live project will be displayed here</article>
      <article>A live project will be displayed here</article>
      <article>A live project will be displayed here</article>
    </section>
  );
}

export default CurrentProjects;
