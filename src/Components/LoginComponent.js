import React, { Component } from "react";

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <h1> This is Login Component </h1>
        <section>
          <div className="container box ">
            <div className="row w-100">
              <div className="col-5">
                <div className="row pt-5">
                  <div className="col-6">
                    <h1 className="company pl-5">
                      <strong>Com</strong> Pany{" "}
                    </h1>
                  </div>
                  <div className="col-6 d-flex pl-5 pt-2">
                    <h5 className="head">LOGIN</h5>
                    <h5 className="sign-up">SIGNUP</h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pl-5"
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
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn btn-col mt-4">
                  <span className="log-txt-for">LOGIN</span>
                </button>
              </form>

              <div>
                <div className=" col-7">
                  <img
                    src={process.env.PUBLIC_URL + "images/login.svg"}
                    alt="login"
                    className="login-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginComponent;
