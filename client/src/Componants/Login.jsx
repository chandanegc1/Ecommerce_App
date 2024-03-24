import axios from 'axios';
import React ,{useState ,useEffect} from 'react'
import {Link , useNavigate} from "react-router-dom";
import { login } from './APIUrl';
import {toast} from "react-toastify"
const Login = () => {
    const navigate = useNavigate();
    
    const [users ,setUsers] = useState([]);
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update the state object with the new value
        setFormData({
          ...formData,
          [name]: value,
        });
      };
     
      
      const [user , setUser] = useState("");

      const handleSubmit = async(event) => {
        event.preventDefault();
        try {
          const res =await axios.post(login, formData);
          localStorage.setItem("userData" , JSON.stringify(res.data.user));
          localStorage.setItem("user" , res.data.user.email);
          navigate("/");
          window.location.reload();
          toast.success(res.data.msg);
        } catch (error) {
          toast.error("something went wrong..");
        }
      }
      
  return (
    <>
        <div className="body">
  <div className="wrapper">
    <h2>Login Now</h2>
    <form action="#" onSubmit={handleSubmit}>
      
      <div className="input-box">
        <input  onChange={handleInputChange} name='email' id="email" type="email" placeholder="Enter your email" required="true" />
      </div>
      <div className="input-box">
        <input  onChange={handleInputChange} name='password' type="password" placeholder="Enter password" required="true" />
      </div>
      <div className="policy">
        <h3 style={{color:"red"}}>{user}</h3>
      </div>
      <div className="input-box button">
         <button type='submit'>Login</button> 
      </div>
      <div className="text">
        <h3>
          You have no account?  <Link to={"/register"}>Register Now </Link>
        </h3>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Login