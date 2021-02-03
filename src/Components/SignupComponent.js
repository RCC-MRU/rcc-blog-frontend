import React, { Component } from "react";

class SignupComponent extends Component {
  render() {
    return <div>
              <section>
                <div className="container box ">
                <div className="row w-100">
                  <div className="col-5">
                    <div class="row pt-5">
                      <div class="col-6">
                          <h1 class="company pl-5"> <span class="com">Com</span>Pany</h1>
                      </div>

                          <div class="col-6 d-flex pl-5 pt-2">
                            <h5 class="head-sign"> LOGIN </h5>
                            <h5 class="sign-up-page">SIGNUP</h5>
                          </div>
                      </div>
                  <div class="pl-5"> 
                    <h1 class="login">SIGN UP</h1>

                      <p>Sign up to continue to our application </p>
                      <form>
                      <div class="form-group">

                            <input type="text" class="inp no-outline pt-4" placeholder="Name   " />
                      </div>
                      <div class="form-group">

                         <input type="password" placeholder="Email" class=" inp no-outline pt-4" id="exampleInputPassword1" />
                       </div>
                       <div class="form-group">

                          <input type="password" placeholder=" .........." class=" inp no-outline pt-4"
                           id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check pt-4">
                          <input type="checkbox" class="form-check-input " id="exampleCheck1" />
                           <label class="form-check-label" for="exampleCheck1">
                          <p class="check"> By clicking sign up, You agree to our Terms of use and knowledge that you have read
                          our Privacy Policy</p>
                           </label>
                        </div>
                        <button type="submit" class="btn btn-col"><span class="log-txt-for">Signup</span></button>





                      </form>
                  
                  
                  
                  
                  </div>






                   </div>

                   <div class=" col-7">

                    <img src="./assets/images/signup.svg" alt="" class="login-img" />


                        </div>



                </div>



                </div>






              </section>





    </div>
  }
}

export default SignupComponent;
