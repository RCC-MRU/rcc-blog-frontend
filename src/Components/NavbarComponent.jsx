import React, { useState } from "react";
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
import { CatData } from "./HomeComponent";
import HomeCategory from "./HomePageComponents/HomeCategoryType";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} className="main-menubar" navbar>
            <Nav navbar>
              <NavItem className="format-main-menubar">
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem className="format-main-menubar">
                <NavLink href="/blog">All Feeds</NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                className="format-main-menubar"
              >
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  {CatData.map((data) => {
                    return (
                      <DropdownItem href="/category" key={data.id}>
                        {data.homeCategoryName}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              {CatData.map((data) => {
                return (
                  <NavItem className="format-main-menubar" key={data.id}>
                    <NavLink
                      href={"/home#" + data.homecategoryUrl}
                      onClick={() => {
                        return (
                          <HomeCategory
                            homeUrihomecategoryUrl={data.homecategoryUrl}
                          />
                        );
                      }}
                    >
                      {data.homeCategoryName}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarComponent;
