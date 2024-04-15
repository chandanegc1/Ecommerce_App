import React from "react";
import { logout, updateUser } from "../Componants/APIUrl";
import axios from "axios";
import { Form, useNavigate} from "react-router-dom";
import scrollToTop from "../Componants/goToTop";
import {toast} from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) ;
  try {
      const url = updateUser;
      const resp = await axios.put(url, data);
      localStorage.setItem("userData" , JSON.stringify(resp.data.user));
      toast.success("Update success..");
      return null;
  } catch (error) {
      toast.error("something went wrong");
      return error;
  }
};

function Profile() {
  scrollToTop();
  let userDataString = localStorage.getItem("userData");
  if(!userDataString) userDataString = "null";
  let userData = JSON.parse(userDataString);
 if(!userData) userData = "";
  const formData=[];
  const navigate = useNavigate();
  async function logoutFun() {
    await axios(logout);
    localStorage.clear();
    toast.success("You're Successfully Log-out .....");
    navigate("/");
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
            <input name="fullname" value={formData.fullname}   placeholder={userData.fullname}/>
          </div>

          <div className="form-group">
            <label>Change Email</label>
            <input name="email" value={formData.email}   placeholder={userData.email}/>
          </div>

          <div className="form-group">
            <label>Change Phone</label>
            <input name="phone" value={formData.phone}   placeholder={userData.phone}/>
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
