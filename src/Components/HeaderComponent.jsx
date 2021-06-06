import React, {useContext} from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
// impoerting context
import {BlogContext} from '../Context/BlogContext'


const HeaderComponent = () => {
  const context = useContext(BlogContext)
  const logout = () => {
    localStorage.clear();
    context.setToken(null)

  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-black">
        <div className="container-fluid mx-auto">
          <div className="row w-100">
            <div className="col-12 col-sm-6 temp-2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fas fa-phone-alt"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-youtube-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="navbar-nav top-right-btns">

                <li className="nav-item active px-1">
                  <a className="nav-link" href="/">
                    <i className="fa fa-search"></i> Search
                  </a>
                </li>
                {context.token?.token ? <>
                <li className="nav-item px-1" onClick={logout}>
                  <Link to="/home" className="nav-link text-white" refresh="true">
                    Logout
                  </Link>
                </li>
                <li><Link className="nav-link text-white">{`Welcome ${context.token?.name}`}</Link> </li>

                </>
                 : <>
                <li className="nav-item px-1">
                  <Link to="/signup" className="nav-link text-white">
                    Signup
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
                </>}
                
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container text-center my-4">
        <p className="format-heading">
          Health <span className="text-light-red"> & </span> Fitness
        </p>
        <p className="small-heading">How To Live a Healthy and Fit Life?</p>
      </div>

      <NavbarComponent />
      <div className="container-fluid">
        <hr />
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
