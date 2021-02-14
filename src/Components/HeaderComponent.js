import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (<React.Fragment>
    
    <nav className="navbar navbar-expand navbar-dark bg-color-black">
      <div className="container-fluid mx-4">
        <div className="row w-100">
          <div className="col-12 col-sm-6 temp-2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fas fa-phone-alt"></i></a>
              </li>
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fas fa-map-marker-alt"></i></a>
              </li>
              <li className="nav-item active px-1">
                <a className="nav-link" href="#"><i className="fab fa-youtube-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <ul className="navbar-nav top-right-btns">
              <li className="nav-item px-1">
                <a className="nav-link text-white" href="#"><i className="fa fa-search"></i> Search</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link text-white" href="./signup.html">Signup</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link text-white" href="./login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div className="container text-center my-4">
      <p className="format-heading">
        Health <span className="red-col"> & </span> Fitness
      </p>
      <p className="small-heading">How To Live a Healthy and Fit Life?</p>
    </div>

    <nav className="navbar navbar-expand-md navbar-light" id="ftco-navbar">
      <div className="container">
        <button className="navbar-toggler text-center mx-auto" type="button" data-toggle="collapse" data-target="#ft-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <strong> Menu </strong>
        </button>
        <div className="collapse navbar-collapse" id="ft-nav">
          <ul className="navbar-nav w-100 main-menubar">
            <li className="nav-item active">
              <a href="./index.html" className="nav-link format-main-menubar">Home</a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link format-main-menubar" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Categories
                <img
                        src={process.env.PUBLIC_URL + "images/icons8-expand-arrow-24.png"}
                        
                        className="img-fluid"
                        alt="wk-route"
                      />
              </a>
              <div className="dropdown-menu w-75 mx-auto dropdown-menu-center" aria-labelledby="navbarDropdown">
                <a className="dropdown-item format-main-menubar" href="./categories.html">Fitness</a>
                <a className="dropdown-item format-main-menubar" href="#">Health</a>
                <a className="dropdown-item format-main-menubar" href="#">Workout</a>
              </div>
            </li>
            <li className="nav-item active">
              <a href="./blogPost.html" className="nav-link format-main-menubar">blogPost</a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link format-main-menubar">Workout</a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link format-main-menubar">Health</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <hr />
    </div>
    </React.Fragment>)
  }
}

export default HeaderComponent;
