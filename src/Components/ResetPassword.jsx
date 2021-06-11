import React, { useState } from "react";
import { toast } from "react-toastify";
// import { forgetPass } from "../Util/axios";
import "react-toastify/dist/ReactToastify.css";
// import {Redirect} from 'react-router-dom'

const ForgotPassowrd = () => {
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

//   const handleChange = (event) => {
//     // console.log(event);
//     // console.log(event.target);
//     const { name, value } = event.target;
//     setForgotState({ ...forgotState, [name]: value });
//   };
  const handleLogin = (event) => {
    event.preventDefault();
    if(password===confirmPassword){
        toast("Passwords matched", { type: "success" });
    }
    if (password !== confirmPassword) {
      toast("Passwords Don't match", { type: "error" });
    }
    // console.log(forgotState);

    // forgetPass(forgotState)
    //   .then((data) => {
    //     // console.log(data);
    //     toast(data.data.message, { type: "success" });
    //   })
    //   .catch((error) => {
    //     toast(error.message, { type: "error" });
    //     console.error(error);
    //   });
  };

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
                <h1 className="login">Reset PASSWORD </h1>
                <p>Enter your password</p>

                <form method="POST" onSubmit={handleLogin}>
                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control form-border-remove no-outline"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.password)}
                      required
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control form-border-remove no-outline"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.confirmPassword)
                      }
                      required
                    />
                  </div>

                  <div className="form-group py-3">
                    
                      <button type="submit" className="btn btn-col" id="login">
                        <span className="log-txt-for">Click here</span>
                      </button>
                    
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6 col-12 right-side">
              <img
                src={process.env.PUBLIC_URL + "images/forgot-pass.svg"}
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

export default ForgotPassowrd;
