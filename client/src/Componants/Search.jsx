import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Search = () => {
  const [val , setVal]  = useState("");
  
  const hndleclick = ()=>{
    const x = document.getElementById("srchInput");
    x.value ="";
  }
  return (
    <div className="search">
      <input id="srchInput" placeholder="Search..." type="text" />
      <FaSearch onClick={hndleclick} className="iconsize cursor"/>
    </div>
  );
};

export default Search;
