import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PageContainer from "./PageContainer";
import { ChatSquareText, PersonBadge, PersonCheck, PersonHeart } from "react-bootstrap-icons";

function ReviewTool() {
  return (
    <PageContainer buttonText="Close" buttonTo="/">
      <section>

      <div className="menu-item">
          <ChatSquareText size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/ProjectReview">
              Project Reviews
            </NavLink>
          </Button>
        </div>

        <div className="menu-item">
          <PersonCheck size={90} />
          <Button variant="dark">
            <NavLink className="nav-link" to="/">
              Individual Feedback
            </NavLink>
          </Button>
        </div>

      </section>
    </PageContainer>
  );
}

export default ReviewTool;