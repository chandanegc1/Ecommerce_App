import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/APIUrl";
import { toast } from "react-toastify";
import {FaEye, FaLowVision } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(login, formData);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      localStorage.setItem("user", res.data.user.email);
      navigate("/");
      window.location.reload();
      toast.success(res.data.msg);
    } catch (error) {
      toast.error("something went wrong..");
    }
  };

  const [vis , setVis] = useState(true);
  const EyeToggle = ()=>{
    setVis(!vis);
  }
  return (
    <>
      <div className="body">
        <div className="wrapper">
          <h2>Login Now</h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                onChange={handleInputChange}
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                required="true"
              />
            </div>
            <div className="input-box flex">
              <input
                onChange={handleInputChange}
                name="password"
                type={vis?"password":"text"}
                placeholder="Enter password"
                required="true"
              />
              {vis?<FaLowVision className="eye" onClick={EyeToggle}/>:<FaEye className="eye" onClick={EyeToggle}/>}
            </div>
            <div className="policy">
            </div>
            <div className="input-box button">
              <button type="submit">Login</button>
            </div>
            <div className="text">
              <h3>
                You have no account? <Link to={"/register"}>Register Now </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
