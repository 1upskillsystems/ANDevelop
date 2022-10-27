import React from "react";
import SearchBar from "./searchBar";

function UserSearch({ handleClick }) {
  return (
    <div className="App">
      <h1>User Search</h1>
      <SearchBar handleClick={handleClick} />
    </div>
  );
}
export default UserSearch;
