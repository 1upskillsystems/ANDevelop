import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import Button from "react-bootstrap/Button";
import "./css/searchBar.css";

const SearchBar = ({ handleClick }) => {
  const [searchInput, setSearchInput] = useState("");
  const [usersToDisplay, setUserToDisplay] = useState([]);
  const users = useContext(UserContext);
  const pathString = window.location.pathname;
  const onUserSearch = pathString == "/userSearch";

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
    <div id="search-container">
      <input
        type="search"
        placeholder="Name here"
        onChange={handleInput}
        value={searchInput}
        id="search-bar"
      />
      <Button type="submit" onClick={handleChange} variant="dark" style={{marginTop: -3}}>
        Search
      </Button>
      {!!usersToDisplay.length && (
        <div id="scrollable-area">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Club</th>
              </tr>
            </thead>
            <tbody>
              {usersToDisplay.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.clubs_house}</td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() => userAdd(user)}
                        variant="dark"
                        id="add-user-button"
                        style={{display: `${onUserSearch ? "none" : "block"}`}}
                    >
                        Add User
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
