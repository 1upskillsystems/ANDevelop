import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import logo from "../assets/ANDevelop-logo.png";
import "./css/pageContainer.css";

const PageContainer = ({ pageTitle, buttonText, buttonTo, children, noPadding = false }) => {
  return (
    <div id="page">
      <div id="page-container">
        <header id="page-header">
          <img src={logo} style={{ maxHeight: 60 }} />
          <h1 id="page-title">{pageTitle}</h1>
        </header>
        {buttonText && buttonTo && (
          <NavLink to={buttonTo} id="button">
            <Button variant="dark">{buttonText}</Button>
          </NavLink>
        )}
        <main id="outer-container">
          <div id="inner-container" style={{padding: noPadding ? 0 : 30}}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default PageContainer;
