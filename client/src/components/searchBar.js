import React, { useState, useContext } from "react";
import PageContainer from "./PageContainer";
import { UserContext } from "../contexts/userContext";
import "./css/searchBar.css";

const SearchBar = ({ handleClick }) => {
  const [searchInput, setSearchInput] = useState("");
  const [usersToDisplay, setUserToDisplay] = useState([]);
  const users = useContext(UserContext);
  const locationString = window.location.pathname;
  const onUserSearch = locationString === "/userSearch";

  function userAdd(user) {
    handleClick(user);
    // this function would ideally take user id and export so use could be added to a project
    return console.log(user.id);
  }

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // could make this so table updates while user typing
  const handleChange = () => {
    if (searchInput.length > 0) {
      // this filters based on search input and put filtered data into a list
      setUserToDisplay(
        users.users.filter((user) => {
          return user.name.toUpperCase().match(searchInput.toUpperCase());
        })
      );
    } else {
      setUserToDisplay(users.users);
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleInput}
        value={searchInput}
        id="search-bar"
      />

      <button type="submit" onClick={handleChange} className="search-button">
        Search
      </button>

      {!!usersToDisplay.length && (
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Club </th>
            </tr>
          </thead>
          <tbody>
            {usersToDisplay.map((user, index) => {
              return (
                <tr key={index}>
                  <td> {user.name} </td>
                  <td> {user.clubs_house} </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => userAdd(user)}
                      className={`search-button ${onUserSearch ? "hidden" : ""}`}
                    >
                      Add User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;