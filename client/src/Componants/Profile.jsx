import React, { useState } from "react";
import { logout, usersurl } from "./APIUrl";
import axios from "axios";
import { Form, useNavigate} from "react-router-dom";
import scrollToTop from "./goToTop";
import {toast} from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) ;
  console.log(data);

  try {
      const url = usersurl+"/chandanegc@gmail.com";
      const response = await axios.put(url, data);

      localStorage.setItem("fullname" ,response.data.fullname)
      localStorage.setItem("email" , response.data.email);
      localStorage.setItem("phone" , response.data.phone);
      toast.success("Update success..");
      window.location.reload();
      return null;
      
  } catch (error) {
      toast.error("something went wrong");
      return error;
  }
};

function Profile() {
  scrollToTop();

  const formData=[];
  const navigate = useNavigate();
  async function logoutFun() {
    await axios(logout);
    localStorage.clear();
    toast.success("You're Successfully Log-out .....");
    navigate("/login");
    window.location.reload(); 
  }

  return (
    <>
      <div className="pflrimg">
        <div className="edit">
          <img src="" alt="" />
          <p>Edit</p>
        </div>
      </div>
      <div className="profile-settings-container">
        <h2>Profile Settings</h2>
        <Form method="post" action="#">
          <div className="form-group">
            <label>Change Name</label>
            <input name="fullname" value={formData.fullname}   placeholder={localStorage.fullname}/>
          </div>

          <div className="form-group">
            <label>Change Email</label>
            <input name="email" value={formData.email}   placeholder={localStorage.email}/>
          </div>

          <div className="form-group">
            <label>Change Phone</label>
            <input name="phone" value={formData.phone}   placeholder={localStorage.phone}/>
          </div>

          <div className="form-group">
            <label>Change Password</label>
            <input name="password" value={formData.password}   placeholder="**********"/>
          </div>

          <div className="form-group" >
            <label>Confirm Password</label>
            <input/>
          </div>

          <button type="submit" className="btn btn-primary">Update Changes</button>
          <button style={{ background: "red" }} onClick={logoutFun} type="submit" className="btn btn-primary">LOG-OUT</button>
        </Form>
      </div>
    </>
  );
}

export default Profile;
