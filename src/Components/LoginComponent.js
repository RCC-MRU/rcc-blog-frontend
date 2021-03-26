import React, { Component } from "react";

class LoginComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="container mt-5 mb-5">
            <div className="row box-shadow">
              <div className="col-md-6 col-12 left-side">
                <div className="row pt-5">
                  <div className="col-8">
                    <h1 className="company">Health & Fitness</h1>
                  </div>
                </div>

                <div
                  className="pl-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    height: "100%",
                    padding: "0 0 0 1rem",
                  }}
                >
                  <h1 className="login">LOG IN </h1>
                  <p>Sign in to continue to our application</p>

                  <form method="POST" action="/blog">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="inp no-outline pt-4"
                        id="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className=" inp no-outline pt-4"
                        id="password"
                        required
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
                      <span className="log-txt-for">Login</span>
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
