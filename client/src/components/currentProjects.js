import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PageContainer from "./PageContainer";

function CurrentProjects() {
  return (
    <PageContainer buttonText="Close" buttonTo="/">
      <section>
        <article>A live project will be displayed here</article>
        <article>A live project will be displayed here</article>
        <article>A live project will be displayed here</article>
      </section>
    </PageContainer>
  );
}

export default CurrentProjects;
