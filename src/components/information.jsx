import React from "react";

import Profile from "../Images/logo/akdr.jpg";
import Typewriter from "./subcomponents/typewriter";

import Typed from "react-typed";

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function information() {
  return (
    <>
      <Container>
        <Row>
          <Col className="colA">
            <Typed
              className="profileName"
              strings={["I'm Adrian Kim D. Requillo", "A Full Stack Developer"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </Col>
          <Col>
            <img
              id="profileImg"
              src={Profile}
            />
          </Col>
        </Row>
        <Row>
          <Col id="contact" className="rowB">
            <h2>Contact</h2>
            <span class="material-symbols-outlined">location_on</span>
            <label>Purok 16, Ising Carmen Davao del Norte</label>
            <br />
            <span class="material-symbols-outlined">call</span>
            <label>+639 065 178 566</label><br/>
            <span class="material-symbols-outlined">mail</span><label>adriankimdrequillo@gmail.com</label><br/>
            <DiGithubBadge/><label>github.com/Strawpple</label><br/>
            <FaLinkedinIn/><label>https://www.linkedin.com/in/adrian-kim-d-requillo-982a18156/</label>
          </Col>

          <Col id="education" className="rowB1">
            <h2>Education</h2>
            <label>Ateneo de Davao University</label><br/>
            <label>Maryknoll High School of Panabo</label><br/>
            <label>Mount Carmel Academy</label>
          </Col>
        </Row>
        <Row >
          <Col id="experience" className="rowC">
            <h2>Experience</h2>
            <label>Awesome OS</label>
            <label>Institutional Communications and Promotions Office (ICOMMP) </label>
            <label>Ateneo Circle of Computer Studies Students</label>
            <label>Center Against Illegal Drugs</label>
          </Col>
          <Col id="achievements" className="rowC1">
            <h2>Awards and Achievements</h2>
            <label>Web Design Competition</label>
            <label>3rd Place in the Start-Up: Web Design Competition during the Ateneo de Davao University - Computer Studies Cluster's Information Technology Week 2021</label>
          </Col>
        </Row>
        <Row>
          <Col id="projects" className="rowD">
            <h2>Projects</h2>
            https://jmavsrentacar.web.app/
            https://nameless-cliffs-37535.herokuapp.com/
          </Col>
          <Col id="references" className="rowD1">
            <h2>References</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default information;
