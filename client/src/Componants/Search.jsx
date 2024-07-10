import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { search as searchAPI } from "../utils/APIUrl";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ name: "", price: "", brand: "" });
  let timeoutId = null;

  const debounce = (func, delay) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearch((prevSearch) => ({
      ...prevSearch,
      [id]: value,
    }));

    debounce(() => {
      // Call your API function here
      fetchData();
    }, 1000); // Adjust delay time as needed
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        searchAPI +
          `?name=${search.name}&price=${search.price}&brand=${search.brand}`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data)
  return (
    <div className="search">
      <input
        id="name"
        value={search.name}
        onChange={handleChange}
        placeholder="Name"
        type="text"
      />
      <input
        id="price"
        value={search.price}
        onChange={handleChange}
        placeholder="Price"
        type="text"
      />
      <input
        id="brand"
        value={search.brand}
        onChange={handleChange}
        placeholder="Brand"
        type="text"
      />
      <FaSearch className="iconsize cursor" onClick={fetchData} />
    </div>
  );
};

export default Search;
