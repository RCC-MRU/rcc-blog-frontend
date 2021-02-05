import React, { Component } from "react";

class SignupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
        <div className="container mt-5">
        <div className="row box-shadow">
        <div className="col-md-6 col-12 left-side">
          <div className="row pt-5">
            <div className="col-6 ">
              <h1 className="company pl-5"> <span className="com">Com</span>Pany</h1>
            </div>

              <div className="col-6 d-flex pl-5 pt-2">
              <h5 className="head-sign"> LOGIN </h5>
              <h5 className="sign-up-page">SIGNUP</h5>
              </div>
          </div>
          <div className="pl-5"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "left",
              flexDirection: "column",
            }}>
            <h1 className="login">SIGN UP</h1>

            <p>Sign up to continue to our application </p>
            <form>
            <div className="form-group">

            <input type="text" className="inp no-outline pt-4" placeholder="Name   " />

            </div>
            <div className="form-group">

            <input type="password" placeholder="Email" className=" inp no-outline pt-4" id="exampleInputPassword1" />
            </div>
            <div className="form-group">

                <input type="password" placeholder=" .........." className=" inp no-outline pt-4"
                  id="exampleInputPassword1" />
              </div>
              <div className="form-group form-check pt-4">
                <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <p className="check"> By clicking sign up, You agree to our Terms of use and knowledge that you have read
                    our Privacy Policy</p>
                </label>
              <button type="submit" className="btn btn-col"><span className="log-txt-for">Signup</span></button>
              </div>
            
            </form>


          </div>
        
        
        
        </div>





        <div className="col-md-6 col-12 right-side"><img src={process.env.PUBLIC_URL + "images/signup.svg"}
        alt="login"class="login-img" /></div>
        
        
        
        
        
        
        </div>
        
        
        
        
        
        
        
        </div>
  
  
        </section>
      </React.Fragment>
    );
  }
}

export default SignupComponent;
