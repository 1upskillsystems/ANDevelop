import React from "react";
import SearchBar from "./searchBar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function UserSearch() {
  return (
    
     <div classname='App'>
        <NavLink to="/">
          <Button variant="dark">Close</Button>
        </NavLink>
        <h1>User Search</h1>
       <SearchBar/>
     </div>
)}
export default UserSearch
