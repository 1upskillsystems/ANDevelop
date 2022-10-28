import React from "react";
import SearchBar from "./searchBar";
import PageContainer from "./PageContainer";

function UserSearch() {
  return (
    <PageContainer buttonText="Close" buttonTo="/">
    <section>
     <div classname='App'>
        <h1>User Search</h1>
       <SearchBar/>
     </div>
     </section>
     </PageContainer>
)}
export default UserSearch
