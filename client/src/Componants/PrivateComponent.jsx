import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { currentUser } from './APIUrl';
import {toast} from "react-toastify"

const PrivateComponent = (props) => {
  const {Component} = props;
  const navigate =useNavigate();

  useEffect(() => {
        const local = localStorage.getItem("user");
        if (!local) {
          navigate("/login");
        }
  }, []);

  return (
    <div><Component/></div>
  )
}
export default PrivateComponent