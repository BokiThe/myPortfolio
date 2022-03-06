import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "./navBar.css";
import logo_icon from "../../ilustrations/logo_icon.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/">
            <Image
              fluid
              roundedCircle
              src={logo_icon}
              alt="logo_icon"
              style={{ width: "50px" }}
            />
            Bojan Ristic
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/AboutMe">
              About Me
            </Link>
            <Link className="nav-link" to="/Experience">
              Experience
            </Link>
            <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/AboutMe">
                Snowboarding
              </Link>
              <Link className="dropdown-item" to="/Flyfishing">
                Fly Fishing
              </Link>
              <Link className="dropdown-item" to="/Hiking">
                Hiking
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
