import React from "react";

const LoginComponent = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container my-5">
          <div className="row box-shadow">
            <div className="col-md-6 col-12 left-side">
              {/* <div className="row pt-5">
                <div className="col-8">
                  <h1 className="company">Health & Fitness</h1>
                </div>
              </div> */}

              <div className="my-5 px-4">
                <h1 className="login">LOG IN </h1>
                <p>Sign in to continue to our application</p>

                <form method="POST" action="/blog">
                  <div className="form-group py-2">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="form-control form-border-remove no-outline"
                      id="email"
                      required
                    />
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control form-border-remove no-outline"
                      id="password"
                      required
                    />
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="confirm-box"
                      required
                    />
                    <label className="custom-control-label" htmlFor="remember-me">
                      Remember Me
                    </label>
                  </div>

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
