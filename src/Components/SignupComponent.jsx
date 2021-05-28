import React from "react";
// import { useState, useEffect } from "react";

const SignupComponent = () => {
  // const [value, setValue] = useState("Workout");

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   console.log(`type: ${name} and value: ${value}`);
  //   setValue({ ...value, [name]: value });
  // }

  // const handleSubmit = (event) => {
  //   alert(`Your Preference is ${event.target.value}`);
  //   event.preventDefault();
  // };

  return (
    <React.Fragment>
      <section>
        <div className="container my-5">
          <div className="row box-shadow">
            <div className="col-md-6 col-12 left-side">
              {/* <div className="row pt-5">
                <div className="col-8">
                  <h1 className="company">Health &amp; Fitness</h1>
                </div>
              </div> */}

              <div className="my-5 px-4">
                <h1 className="login">SIGN UP</h1>
                <p>Sign up to continue to our application </p>

                {/* onSubmit={handleSubmit} */}
                <form method="POST" action="/home">
                  <div className="form-row py-2">
                    <div className="form-group col-md-6">
                      <input
                        type="name"
                        className="form-control form-border-remove no-outline"
                        id="fname"
                        name="fname"
                        placeholder="Enter First Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="name"
                        className="form-control form-border-remove no-outline"
                        id="lname"
                        name="lname"
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>
                  </div>

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

                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control form-border-remove no-outline"
                      id="confirm-password"
                      required
                    />
                  </div>

                  <div className="form-group py-2">
                    {/* <label htmlFor="">Preference</label> */}
                    <select
                      name="preference"
                      className="form-control form-border-remove no-outline"
                      // onChange={handleChange}
                    >
                      <option defaultValue="default" selected>
                        Default
                      </option>
                      <option defaultValue="fitness">Fitness</option>
                      <option defaultValue="workout">Workout</option>
                      <option defaultValue="health">Health</option>
                    </select>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="confirm-box"
                      required
                    />
                    <label className="custom-control-label" htmlFor="t-and-c">
                      Terms &amp; Conditions
                    </label>
                  </div>

                  <div className="form-group py-3">
                    <button type="submit" className="btn btn-col" id="signup">
                      <span className="log-txt-for">Signup</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 col-12 right-side">
              <img
                src={process.env.PUBLIC_URL + "images/signup.svg"}
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

export default SignupComponent;
