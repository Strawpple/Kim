import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../Images/logo/AKDR.png";

function navbar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav.Link href="#home">
          <img
            id="logo"
            src={Logo}
            alt=""
          />
        </Nav.Link>

        <Nav className="me-auto">
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#achievements">Awards and Achievements</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#references">References</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;
