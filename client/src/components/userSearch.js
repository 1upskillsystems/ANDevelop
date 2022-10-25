import React from 'react'
import SearchBar from './searchBar'

function UserSearch() {
  return (
    
     <div classname='App'>
        <h1>search bar component</h1>
       <SearchBar/>
     </div>
)}export default UserSearch

/*

function UserGrab() {
// grab users from some global source
    let users = {
        User1: "Caelyb",
        User2: "Cameron",
        User3: "Caitlin",
        User4: "Andrew"
    } 
    console.log("List of Users; ", users)
    return users
}

function UserList() {

    return 
        <section>
            <h3>
               Koala
            </h3>
            <h3>
                {UserGrab().User1}
            </h3>
            <h3>
                {UserGrab().User2}
            </h3>
            <h3>
                {UserGrab().User3}
            </h3>
            <h3>
               {UserGrab().User4}
            </h3>
        </section>
    )

};

export default UserList;
*/