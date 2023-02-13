import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import {loginUser}  from "../actions/userAction";
import type { RootState, AppDispatch } from '../store';

//type interface for user
interface User {

  email: string,
  password:string

}
// login form for users and admin

const Login : React.FC = () => {

  const [email, setEmail] = useState<string>(""); //State for storing email of the user
  const [password, setPassword] = useState<string>(""); //State for storing password of the user
  const dispatch: AppDispatch = useDispatch(); //Initializing useDispatch() func

  const loginHandler = (e : React.MouseEvent) :void => {
    // Event handle for submitting user email & password
    e.preventDefault();
    const user:User = { email, password };
    //console.log(user);
    dispatch(loginUser(user));
  };


  return (
    <>
      <div className="container  pt-0">
        <div className="LoginSignUpContainer ">
          <div className="LoginSignUpBox">
            <form className="loginForm">
              <div className="logininput">
                <i className="bi bi-envelope-open-fill"></i>&nbsp;
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email"
                />
              </div>
              <div className="logininput">
                <i className="bi bi-file-earmark-lock2-fill"></i>&nbsp;
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password"
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="loginBtn"
                onClick ={loginHandler}
                data-testid="login-btn"
              />
              <div className="mt-4" style={{ justifyContent: "center" }}>
                <Link to="/">
                  {" "}
                  <button
                    className="loginBtn"
                    style={{ backgroundColor: "#5e5a5a" }}
                    data-testid="button"
                  >
                    {" "}
                    Go To Home
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
//export { loginHandler }
export default Login;
