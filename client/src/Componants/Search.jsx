import React, {useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { search as searchAPI } from "../utils/APIUrl";
import {useDispatch, useSelector} from "react-redux";
import { UpdateSearch } from "../Redux/Slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state=>state.search);
  console.log(selector)
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
      fetchData();
    }, 1000);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        searchAPI +
          `?name=${search.name}&price=${search.price}&brand=${search.brand}`
      );
      setData(res.data);
      dispatch(UpdateSearch(res.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div className="search">
      <input
        id="name"
        className="srchInput"
        value={search.name}
        onChange={handleChange}
        placeholder="Search..."
        type="text"
      />
      <input
        id="price"
        className="srchInput disp"
        value={search.price}
        onChange={handleChange}
        placeholder="Price"
        type="text"
      />
      <input
        id="brand"
        className="srchInput disp"
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
