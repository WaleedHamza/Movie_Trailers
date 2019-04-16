import React from "react";
import "./searchBar.css";


const Search = () => (
    <div className="search">
    
    <input className="searchInput" 
    onChange = {this.searchChangeHandler.bind(this)} placeholder="Search"/>

    </div>
);


export default Search;