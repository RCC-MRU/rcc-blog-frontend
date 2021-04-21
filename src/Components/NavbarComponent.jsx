import React from "react";
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

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              className="main-menubar"
              navbar
            >
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
                        <DropdownItem href="/category">
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
  }
}

export default NavbarComponent;
