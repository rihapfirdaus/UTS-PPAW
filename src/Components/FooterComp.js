import React, { Component } from "react";
import { Github, Linkedin, Instagram } from "react-bootstrap-icons";
import { Col, Row, Container } from "react-bootstrap";

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-comp">
        <Row>
            <Col>
                <a className="icon-footer" href="https://github.com/rihapfirdaus"><Github color="#fff"></Github></a>
                <a className="icon-footer" href="https://www.linkedin.com/in/rihapfirdaus"><Linkedin color="#fff"></Linkedin></a>
                <a className="icon-footer" href="https://www.instagram.com/rhp.frds/"><Instagram color="#fff"></Instagram></a>
            </Col>
        </Row>
        <Row>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://wa.me/+6289522664281">Contact</a>
            <a href="">About Me</a>
            <a href="">Term & Conditions</a>
          </Col>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://github.com/rihapfirdaus?tab=repositories">Project</a>
            <a href="">Change Country</a>
            <a href="">FAQ</a>
          </Col>
        </Row>
      </div>
    );
  }
}
