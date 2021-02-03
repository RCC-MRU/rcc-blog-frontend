import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import CategoriesComponent from "./Components/CategoriesComponent";
import BlogpostComponent from "./Components/BlogpostComponent";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={() => <HomeComponent />} />
        <Route exact path="/blog" component={() => <BlogpostComponent />} />
        <Route
          exact
          path="/category"
          component={() => <CategoriesComponent />}
        />
        <Route exact path="/signup" component={() => <SignupComponent />} />
        <Route exact path="/login" component={() => <LoginComponent />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Router;
