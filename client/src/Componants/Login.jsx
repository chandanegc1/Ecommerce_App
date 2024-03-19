import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";
import scrollToTop from "./goToTop";
import { login } from "./APIUrl.js";
import {toast} from "react-toastify"

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    localStorage.setItem("user", data.email);

    const response = await axios.post(login, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      toast.success("Login successful");
    } else {
      toast.error("Login failed");
    }
    
    return redirect("/");
  } catch (error) {
    toast.error("Something went wrong");
    return error;
  }
};


const Login = () => {
  scrollToTop(); 
  return (
    <>
      <div className="body">
        <div className="wrapper">
          <h2>Login Now</h2>
          <Form method="post">
            <div className="input-box">
              <input
                name="email"
                id="email"
                type="email"
                defaultValue="chandanegc@gmail.com"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <input
                name="password"
                type="password"
                defaultValue="1234"
                autoFill
                placeholder="Enter password"
                required
              />
            </div>
            <div className="policy">
              <h3 style={{ color: "red" }}></h3>
            </div>
            <div className="input-box button">
              <button type="submit">Login</button>
            </div>
            <div className="text">
              <h3>
                You have no account? <Link to={"/register"}>Register Now </Link>
              </h3>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
