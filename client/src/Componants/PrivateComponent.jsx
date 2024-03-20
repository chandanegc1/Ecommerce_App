import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { currentUser } from './APIUrl';
import {toast} from "react-toastify"

const PrivateComponent = (props) => {
  const {Component} = props;
  const navigate =useNavigate();
  const[User, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios(currentUser);
        setUser(data.user);
        if (!User) {
          navigate("/login");
          toast.error("Please Login...");
        }
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return (
    <div><Component/></div>
  )
}
export default PrivateComponent