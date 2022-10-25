import React from "react";
import "./css/GlobalContainer.css";

const GlobalContainer = ({ pageTitle, children }) => {
  return (
    <div id="page">
      <header id="page-header">
        <div id="and-develop">ANDevelop</div>
        <h1 id="page-title">{pageTitle}</h1>
      </header>
      <div id="outer-container">
        <div id="inner-container">{children}</div>
      </div>
    </div>
  );
};

export default GlobalContainer;
