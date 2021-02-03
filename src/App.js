import React from "react";
// import Router from "./Components/Router";
import { BrowserRouter } from 'react-router-dom';
import Signup from './Components/SignupComponent'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Signup/>
      </BrowserRouter>
    );
  }
}

export default App;

/**
 * Enpoints list:
 * /home
 * /blog
 * /categories
 * /signup
 * /login
 */

// HomeComponent Srijan
// LoginComponent: Arsh
// SignupComponent: Kunal
// BlogpostComponent: Khushi
// CategoriesComponent: Nipun

