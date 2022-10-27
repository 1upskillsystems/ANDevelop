import React from "react";
import SearchBar from "./searchBar";
import PageContainer from "./PageContainer";

function UserSearch({ handleClick, title }) {
  const pathString = window.location.pathname;
  const onUserSearch = pathString == "/userSearch";

  if (onUserSearch) {
    return (
      <PageContainer 
        pageTitle="User search"
        buttonText="Close" 
        buttonTo="/"
      >
        <div>
          {<h1>{title || "User Search"}</h1>}
          <SearchBar handleClick={handleClick} />
        </div>
      </PageContainer>
    );
  } else {
    return (
      <div>
        {<h1>{title || "User Search"}</h1>}
        <SearchBar handleClick={handleClick} />
      </div>
    );
  }

  
}
export default UserSearch;
