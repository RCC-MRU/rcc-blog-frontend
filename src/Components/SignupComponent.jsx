import React from "react";
import { useState } from "react";

const SignupComponent = () => {



  const [value, setValue] = useState('Workout');

  // constructor(props) {
  //   super(props);
  //   this.state = {value: 'Workout'};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }


  function handleChange(event) {
    const { name, value } = event.target;
  console.log(`type: ${name} and value: ${value}`);
    setValue({ ...value, [name]: value });
  }

  const handleSubmit = (event) => {
    alert(`Your Preference is ${event.target.value}`);
    event.preventDefault();

  };


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
                <h1 className="login">SIGN UP</h1>
                <p>Sign up to continue to our application </p>
                <form method="POST" action="/blog" onSubmit={handleSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="name"
                        class="form-control"
                        id="fname"
                        name="fname"
                        placeholder="Enter firstname"
                        className="inp no-outline pt-3"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="name"
                        class="form-control"
                        id="lname"
                        name="lname"
                        placeholder="Enter lastname"
                        className="inp no-outline pt-3"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className=" inp no-outline pt-3"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className=" inp no-outline pt-3"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className=" inp no-outline pt-3"
                      id="confirm-password"
                      required
                    />
                  </div>



                  <div>
                  <label>
           <p>Choose Preference</p>
                  <select name="preference" onChange={handleChange}>
               <option value="fitness">Fitness</option>
               <option value="workout">Workout</option>
               <option value="health">Health</option>
           </select>
           </label>
                  </div>


                  <div class="custom-control custom-checkbox">
                    <input
                    
                      type="checkbox"
                      class="custom-control-input"
                      id="confirm-box"
                      required
                    />
                    <label class="custom-control-label" for="confirm-box">
                      Terms & Conditions
                    </label>
                  </div>
                  <div className="form-group form-check pt-4">
                    <button type="submit" className="btn btn-col mb-5">
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
