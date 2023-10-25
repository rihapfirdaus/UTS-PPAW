import React, { Component } from "react";
import { SendFill, KeyboardFill } from "react-bootstrap-icons";
import { Col, Row, Container } from "react-bootstrap";

export default class FirstMainComp extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xxl={6} xl={12} className="main-container">
            <KeyboardFill size={84} color="#050038"></KeyboardFill>
            <h3>Easy To Implement</h3>
            <p>Easy to implement in your company <br/> with powerfull platform</p>
          </Col>
          <Col xxl={6} xl={12} className="main-container">
            <SendFill size={84} color="#050038"></SendFill>
            <h3>Optimize System</h3>
            <p>More than 1000 company use this <br/> product</p>
          </Col>
        </Row>
      </Container>
    );
  }
}