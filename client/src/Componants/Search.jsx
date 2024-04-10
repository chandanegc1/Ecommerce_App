import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <input id="srchInput" placeholder="Search..." type="text" />
      <FaSearch className="iconsize"/>
    </div>
  );
};

export default Search;
