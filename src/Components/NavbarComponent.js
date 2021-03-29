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

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      navData: [
        {
          id: 1,
          categoryName: "Fitness",
          categoryUrl: "/home#fitness",
        },
        {
          id: 2,
          categoryName: "Health",
          categoryUrl: "/home#health",
        },
        {
          id: 3,
          categoryName: "Workout",
          categoryUrl: "/home#workout",
        },
      ],
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
                    <DropdownItem href="/category">Category 1</DropdownItem>
                    <DropdownItem>Category 2</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {this.state.navData.map((data) => {
                  return (
                    <NavItem className="format-main-menubar" key={data.id}>
                      <NavLink href={data.categoryUrl}>
                        {data.categoryName}
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
