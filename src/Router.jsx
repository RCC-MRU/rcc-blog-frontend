import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import CategoryComponent from "./Components/CategoryComponent";
import BlogpostComponent from "./Components/BlogpostComponent";
import ForgotPassowrd from "./Components/ForgotPassword";
import ResetPassowrd from "./Components/ResetPassword";

// impoerting context
import { BlogContext } from "./Context/BlogContext";
// import header and footer
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { ToastContainer } from "react-toastify";

//local storage items
const emailLocal = localStorage.getItem("email")
const tokenLocal = localStorage.getItem("token");
const nameLocal = localStorage.getItem("name");


const Router = () => {
  const [credentials, setCredentials] = useState({
    email: emailLocal,
    name: nameLocal,
    token: tokenLocal,
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <BlogContext.Provider value={{ credentials, setCredentials }}>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() => <HomeComponent />} />
          <Route
            exact
            path="/blog/:slug"
            component={() => <BlogpostComponent />}
          />
          <Route
            exact
            path="/category/:slug"
            component={() => <CategoryComponent />}
          />
          <Route exact path="/signup" component={() => <SignupComponent />} />
          <Route exact path="/login" component={() => <LoginComponent />} />
          <Route
            exact
            path="/forgotPassword"
            component={() => <ForgotPassowrd />}
          />
          <Route
            exact
            path="/resetPassword"
            component={() => <ResetPassowrd />}
          />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </BlogContext.Provider>
    </React.Fragment>
  );
};

export default Router;
