import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import Button from "react-bootstrap/Button";

const SearchBar = ({ handleClick }) => {
  const [searchInput, setSearchInput] = useState("");
  const [usersToDisplay, setUserToDisplay] = useState([]);

  const users = useContext(UserContext);

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
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleInput}
        value={searchInput}
      />

      <Button type="submit" onClick={handleChange} variant="dark">
        Search
      </Button>

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
                  <button type="submit" onClick={() => userAdd(user)}>
                    Add User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
