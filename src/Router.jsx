import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import CategoryComponent from "./Components/CategoryComponent";
import BlogpostComponent from "./Components/BlogpostComponent";
import ForgotPassowrd from "./Components/ForgotPassword";
 
// impoerting context
import {BlogContext} from './Context/BlogContext'
// import header and footer
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { ToastContainer } from "react-toastify";

const Router = () => {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const localToken = localStorage.getItem("token")
  const [token, setToken] = useState({
    email: email, name:name,token:localToken
  });
    // const HomePage = () => {
    //   return <HomeComponent />;
    // };

    // const BlogPage = () => {
    //   return <BlogpostComponent />;
    // };

    // const CategoryPage = ({ match }) => {
    //   return <CategoryComponent homeCategoryName={match.params.cateName} />;
    // };

    return (
      <React.Fragment>
      <ToastContainer />
      <BlogContext.Provider value={{ token, setToken}}>

        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() => <HomeComponent/>} />
          <Route exact path="/blog/:slug" component={BlogpostComponent} />
          <Route exact path="/category/:slug" component={CategoryComponent} />
          <Route exact path="/signup" component={() => <SignupComponent />} />
          <Route exact path="/login" component={() => <LoginComponent />} />
          <Route exact path="/forgotPassword" component={() => <ForgotPassowrd />} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </BlogContext.Provider>
      </React.Fragment>
    );
  }

export default Router;
