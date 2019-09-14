import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

import CvPdf from "../../assets/cv/DorotaKoraCVeng.pdf";

const HeaderNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dorota Kora</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Resume" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Education</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Experience</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Interests</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Skills</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav style={{ border: "1px solid white" }}>
          <Nav.Link href={CvPdf} target="_blank">
            Download my full resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
