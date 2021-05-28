import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import CategoryComponent from "./Components/CategoryComponent";
import BlogpostComponent from "./Components/BlogpostComponent";

// import header and footer
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { ToastContainer } from "react-toastify";

class Router extends Component {
  render() {
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
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={() => <HomeComponent/>} />
          <Route exact path="/blog/:slug" component={BlogpostComponent} />
          <Route exact path="/category/:slug" component={CategoryComponent} />
          <Route exact path="/signup" component={() => <SignupComponent />} />
          <Route exact path="/login" component={() => <LoginComponent />} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default Router;
