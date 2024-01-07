import React, { useState } from "react";
import { usersurl } from "./APIUrl";
import axios from "axios";
import { useNavigate ,useParams } from "react-router-dom";
import scrollToTop from "./goToTop";
function Profile() {
  scrollToTop();
  const {ProductId} = useParams()
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData , [name]: value});
  };

  const localEmail = localStorage.getItem("email");
 const handleSubmit = async ()=>{
  try {
    const {fullname , email ,phone ,password} = formData;
    const url = usersurl+"/chandanegc@gmail.com";
    const response =await axios.put(url,{fullname , email ,phone ,password});
    if(fullname){
      localStorage.setItem("fullname" ,response.data.fullname)
    }
    if(email){
      localStorage.setItem("email" , response.data.email);
    }
    if(phone){
      localStorage.setItem("phone" , response.data.phone);
    }
    alert("Updated successfully..........")
    navigate("/");
    window.location.reload();
  } catch (error) {
    // console.log(error);
  }
 }

  // logout 
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    alert("You're Successfully Log-out .....");
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


        <form action="#" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Change Name</label>
            <input name="fullname" value={formData.fullname} onChange={handleInputChange} placeholder={localStorage.fullname}/>
          </div>

          <div className="form-group">
            <label>Change Email</label>
            <input name="email" value={formData.email} onChange={handleInputChange} placeholder={localStorage.email}/>
          </div>

          <div className="form-group">
            <label>Change Phone</label>
            <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder={localStorage.phone}/>
          </div>

          <div className="form-group">
            <label>Change Password</label>
            <input name="password" value={formData.password} onChange={handleInputChange} placeholder="**********"/>
          </div>

          <div className="form-group" >
            <label>Confirm Password</label>
            <input/>
          </div>

          <button type="submit" className="btn btn-primary">Update Changes</button>
          <button style={{ background: "red" }} onClick={logout} type="submit" className="btn btn-primary">LOG-OUT</button>
        </form>

      </div>
    </>
  );
}

export default Profile;
