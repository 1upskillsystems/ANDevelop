import React from "react";
import SearchBar from "./searchBar";

function UserSearch({ handleClick, title }) {
  return (
    <div className="App">
      {<h1>{title || "User Search"}</h1>}
      <SearchBar handleClick={handleClick} />
    </div>
  );
}
export default UserSearch;
