import React, { Component } from "react";
import { Github, Linkedin, Instagram } from "react-bootstrap-icons";
import { Col, Row, Container } from "react-bootstrap";

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-comp">
        <Row>
            <Col>
                <a className="icon-footer" href="https://github.com/rihapfirdaus" target="blank"><Github color="#fff"></Github></a>
                <a className="icon-footer" href="https://www.linkedin.com/in/rihapfirdaus" target="blank"><Linkedin color="#fff"></Linkedin></a>
                <a className="icon-footer" href="https://www.instagram.com/rhp.frds/" target="blank"><Instagram color="#fff"></Instagram></a>
            </Col>
        </Row>
        <Row>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://wa.me/+6289522664281" target="blank">Contact</a>
            <a href="" target="blank">About Me</a>
            <a href="" target="blank">Term & Conditions</a>
          </Col>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://profile.thedreams.tech/CurriculumVitae/basic/" target="blank">Project</a>
            <a href="" target="blank">Change Country</a>
            <a href="" target="blank">FAQ</a>
          </Col>
        </Row>
      </div>
    );
  }
}
