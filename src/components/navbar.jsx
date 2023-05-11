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
          <Nav.Link href="#home">Profile</Nav.Link>
          <Nav.Link href="#features">Education</Nav.Link>
          <Nav.Link href="#pricing">Experience</Nav.Link>
          <Nav.Link href="#pricing">Skills</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">References</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;
