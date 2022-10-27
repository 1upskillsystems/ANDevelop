import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./css/pageContainer.css";

const PageContainer = ({ pageTitle, buttonText, buttonTo, children }) => {
  return (
    <div id="page">
      <div id="page-container">
        <header id="page-header">
          <div id="and-develop">ANDevelop</div>
          <h1 id="page-title">{pageTitle}</h1>
        </header>
        {buttonText && buttonTo && (
          <NavLink to={buttonTo} id="button">
            <Button variant="dark">{buttonText}</Button>
          </NavLink>
        )}
        <main id="outer-container">
          <div id="inner-container">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default PageContainer;
