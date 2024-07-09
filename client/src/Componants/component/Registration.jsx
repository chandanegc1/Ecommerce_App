import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import scrollToTop from "../../utils/goToTop";
import { usersurl } from "../../utils/APIUrl";
import { toast } from "react-toastify";

const Registration = () => {
  scrollToTop();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(usersurl, {
        fullname: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      toast.success("Registration success....");
      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("fullname", formData.name);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("phone", formData.phone);
      localStorage.setItem("id", response._id);
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong..");
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              onChange={handleInputChange}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required="true"
            />
          </div>
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
          <div className="input-box">
            <input
              onChange={handleInputChange}
              name="phone"
              type="text"
              placeholder="Enter your Phone No."
              required="true"
            />
          </div>
          <div className="input-box">
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              min={8}
              max={20}
              placeholder="Create password"
              required="true"
            />
          </div>
          <div className="input-box">
            <input
              onChange={handleInputChange}
              type="password"
              placeholder="Confirm password"
              min={4}
              max={20}
              required="true"
            />
          </div>
          <div className="policy">
            <input type="checkbox" required />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="submit" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to={"/login"}>Login Now </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
