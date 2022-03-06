import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Ristic Bojan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Experience</Nav.Link>
            <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Snowboarding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fly Fishing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hiking</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
