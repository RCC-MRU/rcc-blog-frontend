import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (<React.Fragment>
    
    <nav class="navbar navbar-expand navbar-dark bg-color-black">
      <div class="container-fluid mx-4">
        <div class="row w-100">
          <div class="col-12 col-sm-6 temp-2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
              </li>
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fas fa-phone-alt"></i></a>
              </li>
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fas fa-map-marker-alt"></i></a>
              </li>
              <li class="nav-item active px-1">
                <a class="nav-link" href="#"><i class="fab fa-youtube-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6">
            <ul class="navbar-nav top-right-btns">
              <li class="nav-item px-1">
                <a class="nav-link text-white" href="#"><i class="fa fa-search"></i> Search</a>
              </li>
              <li class="nav-item px-1">
                <a class="nav-link text-white" href="./signup.html">Signup</a>
              </li>
              <li class="nav-item px-1">
                <a class="nav-link text-white" href="./login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container text-center my-4">
      <p class="format-heading">
        Health <span class="red-col"> & </span> Fitness
      </p>
      <p class="small-heading">How To Live a Healthy and Fit Life?</p>
    </div>

    <nav class="navbar navbar-expand-md navbar-light" id="ftco-navbar">
      <div class="container">
        <button class="navbar-toggler text-center mx-auto" type="button" data-toggle="collapse" data-target="#ft-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <strong> Menu </strong>
        </button>
        <div class="collapse navbar-collapse" id="ft-nav">
          <ul class="navbar-nav w-100 main-menubar">
            <li class="nav-item active">
              <a href="./index.html" class="nav-link format-main-menubar">Home</a>
            </li>
            <li class="nav-item dropdown active">
              <a class="nav-link format-main-menubar" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Categories
                <img src="./assets/images/icons8-expand-arrow-24.png" width="10" />
              </a>
              <div class="dropdown-menu w-75 mx-auto dropdown-menu-center" aria-labelledby="navbarDropdown">
                <a class="dropdown-item format-main-menubar" href="./categories.html">Fitness</a>
                <a class="dropdown-item format-main-menubar" href="#">Health</a>
                <a class="dropdown-item format-main-menubar" href="#">Workout</a>
              </div>
            </li>
            <li class="nav-item active">
              <a href="./blogPost.html" class="nav-link format-main-menubar">blogPost</a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link format-main-menubar">Workout</a>
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link format-main-menubar">Health</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <hr />
    </div>
    </React.Fragment>)
  }
}

export default HeaderComponent;
