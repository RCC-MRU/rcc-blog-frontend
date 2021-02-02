import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import SignupComponent from './SignupComponent';
import CategoriesComponent from './CategoriesComponent';
import BlogpostComponent from "./BlogpostComponent";

class Router extends Component {
  
  render() {
    return (
      <Switch>
        <Route path="/home" component={() => <HomeComponent/>} />
        <Route exact path="/blog" component={() => <BlogpostComponent />} />
        <Route exact path="/categories" component={() => <CategoriesComponent />} />
        <Route exact path="/signup" component={() => <SignupComponent />} />
        <Route exact path="/login" component={() => <LoginComponent />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Router;
