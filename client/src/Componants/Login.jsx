import axios from 'axios';
import React ,{useState ,useEffect} from 'react'
import {Link , useNavigate} from "react-router-dom";
import { usersurl } from './APIUrl';

const Login = () => {
    const navigate = useNavigate();
    useEffect(()=>{
      let login = localStorage.getItem('user' , true);
      if(login){
        navigate("/");
      }
     })

    const [users ,setUsers] = useState([]);
    useEffect(()=>{
        axios.get(usersurl)
        .then(users=>setUsers(users.data))
        .catch((err)=>console.log(err))
      },[])

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
        
      const handleSubmit = (event) => {
        event.preventDefault();
        users.map(data =>{
          if(data.password === formData.password && data.email === formData.email){
            localStorage.setItem("user" , JSON.stringify(formData));
            navigate("/")
          }
          else{
            setUser("Incorrect Password or Email");
          }
        });
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