import React from "react";
import { NavLink } from "react-router-dom";
import PageContainer from "./PageContainer";
import Button from "react-bootstrap/Button";
import "./css/templateRoute.css";

function TemplateRoute() {
  return (
    <PageContainer
      pageTitle="Create New Project"
      buttonText="Close"
      buttonTo="/"
      noPadding
    >
      <div id="template-route-section">
        <div id="template-route-header-section">
          <h2>Create or select a template</h2>
        </div>
        <div id="template-route-content-section">
          <section id="create-template">
            <NavLink to="" className="template-route-button">
              <Button disabled variant="dark">
                Create a new template
              </Button>
            </NavLink>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section id="choose-template">
            <NavLink
              to="/choose-existing-template"
              className="template-route-button"
            >
              <Button variant="dark">Select exiting template</Button>
            </NavLink>
            <p>
              Mattis pellentesque id nibh tortor id aliquet lectus. Ut sem nulla
              pharetra diam. Lobortis feugiat vivamus at augue. Faucibus
              interdum posuere lorem ipsum dolor sit amet. Varius duis at
              consectetur lorem donec massa. Massa tincidunt nunc pulvinar
              sapien et ligula ullamcorper malesuada proin. Nunc sed velit
              dignissim sodales ut eu. Integer vitae justo eget magna fermentum
              iaculis eu non diam.
            </p>
          </section>
        </div>
      </div>
    </PageContainer>
  );
}

export default TemplateRoute;
