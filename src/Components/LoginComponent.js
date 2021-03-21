import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="container mt-5 mb-5">
            <div className="row box-shadow">
              <div className="col-md-6 col-12 left-side">
                <div className="row pt-5">
                  <div className="col-6">
                    <h1 className="company pl-3">
                      <span className="com">Health&Fitness</span>
                    </h1>
                  </div>
                  <div className="col-6 d-flex pt-2 pl-5">
                    <h5 className="head">LOGIN</h5>
                    <Link to="/signup" style={{textDecoration: "none"}}>
                      <h5 className="sign-up">SIGNUP</h5>
                    </Link>
                  </div>
                </div>

                <div
                  className="pl-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "left",
                    flexDirection: "column",
                  }}
                >
                  <h1 className="login">LOG IN </h1>
                  <p>Sign in to continue to our application</p>

                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="inp no-outline pt-4"
                        placeholder="username/Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder=" .........."
                        className=" inp no-outline pt-4"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="form-group form-check pt-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-col mt-4 mb-5">
                      <span className="log-txt-for">LOGIN</span>
                    </button>
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
  }
}

export default LoginComponent;
