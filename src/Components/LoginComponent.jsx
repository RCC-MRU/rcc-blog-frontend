import React, { useState, useContext } from "react";
import {toast} from 'react-toastify'
import { login } from "../Util/axios";
import "react-toastify/dist/ReactToastify.css";
import {Redirect} from 'react-router-dom'
// impoerting context
import {BlogContext} from '../Context/BlogContext'

const LoginComponent = () => {
  const context = useContext(BlogContext)
  let [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(loginState);

    login(loginState)
      .then((data) => {
        console.log(data);
        toast(data.data.message, {type: "success"})
        // alert();
        context.setToken({
          email: data.data.email,
          name: data.data.firstName,
          token: data.data.token
        })
        window.localStorage.setItem("email", data.data.email)
        window.localStorage.setItem("name", data.data.firstName);
        window.localStorage.setItem("token", data.data.token);
      })
      .catch((error) => {
        toast(error.message, {type: "error"})
        console.error(error)});
  };
  if(context.token?.token){
    <Redirect to="/home" />
  }
  return (
    <React.Fragment>
      <section>
        <div className="container my-5">
          <div className="row box-shadow">
            <div className="col-md-6 col-12 left-side">
              <div className="my-5 px-4">
                <h1 className="login">LOG IN </h1>
                <p>Sign in to continue to our application</p>

                <form method="POST" onSubmit={handleLogin}>
                  <div className="form-group py-2">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="form-control form-border-remove no-outline"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control form-border-remove no-outline"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check-box"
                      name="check"
                      required
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="check-box">
                      Remember me
                    </label>
                  </div> */}

                  {/* <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="confirm-box"
                      onchange={handleChange}
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="remember-me"
                    >
                      Remember Me
                    </label>
                  </div> */}

                  <div className="form-group py-3">
                    <button type="submit" className="btn btn-col" id="login">
                      <span className="log-txt-for">Login</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 col-12 right-side">
              <img
                src={process.env.PUBLIC_URL + "images/login.svg"}
                alt="login"
                className="login-img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginComponent;
