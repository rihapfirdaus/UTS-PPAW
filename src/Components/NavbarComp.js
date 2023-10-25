import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../logo.svg";

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar expand="lg" className="nav-menu" fixed="top">
        <Navbar.Brand href="#home" className="ms-3">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"/>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end me-3"
        >
          <Nav>
            <Nav.Link className="me-5 ms-5" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="me-5 ms-5" href="https://wa.me/+6289522664281">
              Contact
            </Nav.Link>
            <Nav.Link className="me-5 ms-5" href="https://profile.thedreams.tech/CurriculumVitae/basic/" target="blank">
              About Me
            </Nav.Link>
            <Nav.Link className="me-5 ms-5" href="https://github.com/rihapfirdaus/UTS-PPAW/blob/master/README.md">
              Docs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
