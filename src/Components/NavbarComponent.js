import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar light expand="md" id="ftco-navbar">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto main-menubar" navbar >
              <NavItem className="format-main-menubar">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className="format-main-menubar">
                <NavLink href="/blog" >All Feed</NavLink>
              </NavItem>
              <NavItem className="format-main-menubar">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                   Categories
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Header</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem className="format-main-menubar">
                <NavLink href="/category">Fitness</NavLink>
              </NavItem>
              <NavItem className="format-main-menubar">
                <NavLink href="/category">Health</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-md navbar-light" id="ftco-navbar">
        <div className="container">
          <button
            className="navbar-toggler text-center mx-auto"
            type="button"
            data-toggle="collapse"
            data-target="#ft-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <strong> Menu </strong>
          </button>
          <div className="collapse navbar-collapse" id="ft-nav">
            <ul className="navbar-nav w-100 main-menubar">
              <li className="nav-item active">
                <Link to="/" className="nav-link format-main-menubar">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link format-main-menubar"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Categories
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/icons8-expand-arrow-24.png"
                    }
                    className="img-fluid"
                    alt="wk-route"
                  />
                </a>
                <div
                  className="dropdown-menu w-75 mx-auto dropdown-menu-center"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item format-main-menubar"
                    href="./categories.html"
                  >
                    Fitness
                  </a>
                  <a className="dropdown-item format-main-menubar" href="/#">
                    Health
                  </a>
                  <a className="dropdown-item format-main-menubar" href="/#">
                    Workout
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <Link to="/blog" className="nav-link format-main-menubar">
                  blogPost
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/category" className="nav-link format-main-menubar">
                  Fitness
                </Link>
              </li>
              <li className="nav-item active">
                <a href="/#" className="nav-link format-main-menubar">
                  Health
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default NavbarComponent;
