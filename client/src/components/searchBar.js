import React, {useState} from 'react'
import { UserContext } from "../contexts/userContext";


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const [usersToDisplay, setUserToDisplay] = useState([])

// const users = UserContext(UserContext);
const users = [
    {
      id: 1,
      first_name: "Caelyb",
      last_name: "str",
      clubs_house: "Somerville",
      individual_role: "str",
      projects: [
        { project_id: "int", role: "int" },
        { project_id: "int", role: "int" },
      ],
    },
    {
      id: 2,
      first_name: "Andrew",
      last_name: "str",
      clubs_house: "Almeida",
      individual_role: "str",
      projects: [
        { project_id: "int", role: "int" },
        { project_id: "int", role: "int" },
      ],
    },
    {
        id: 2,
        first_name: "Cameron",
        last_name: "str",
        clubs_house: "Almeida",
        individual_role: "str",
        projects: [
          { project_id: "int", role: "int" },
          { project_id: "int", role: "int" },
        ],
      },
      {
        id: 2,
        first_name: "Cameron",
        last_name: "str",
        clubs_house: "Somerville",
        individual_role: "str",
        projects: [
          { project_id: "int", role: "int" },
          { project_id: "int", role: "int" },
        ],
      },
  ];

const handleInput = (e) => {
    e.preventDefault();
  setSearchInput(e.target.value);
}

// could make this so table updates while user typing
const handleChange = () => {

if (searchInput.length > 0) {
// this filters based on search input and put filtered data into a list
        setUserToDisplay(
            users.filter((user) => {
    return user.first_name.match(searchInput);
})); 
}}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleInput}
   value={searchInput} />

   <button type="submit" onClick={handleChange}> Search</button>

<table>
  <thead>
    <tr>
    <th> Name </th>
    <th> Club </th>
    </tr>
  </thead>
<tbody>

  {usersToDisplay.map((user) => {
return (
<tr >
    <td> {user.first_name} </td>
    <td> {user.clubs_house} </td>
</tr>
)
})}

</tbody>
</table>

</div>

// 
};

export default SearchBar;