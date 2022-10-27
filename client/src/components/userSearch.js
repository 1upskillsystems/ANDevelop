import React from "react";
import SearchBar from "./searchBar";
import PageContainer from "./PageContainer";

function UserSearch({ handleClick, title }) {
  const locationString = window.location.pathname;
  const onUserSearch = locationString === "/userSearch";

  if (onUserSearch) {
    return (
      <PageContainer 
        pageTitle="User search"
        buttonText="Close" 
        buttonTo="/"
      >
        <h1>{title || "User Search"}</h1>
        <div>
          <SearchBar handleClick={handleClick} />
        </div>
      </PageContainer>
    );
  } else {
    return (
      <div>
        <h1>{title || "User Search"}</h1>
        <div>
          <SearchBar handleClick={handleClick} />
        </div>
      </div>
    );
  }
  
}
export default UserSearch;
