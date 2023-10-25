import React, { Component } from "react";
import { Col, Row, Container, Image } from "react-bootstrap";

export default class SecondMainComp extends Component {
  render() {
    return (
      <Container fluid  className="second-main">
        <Row>
          <Col xxl={6} xl={12} className="main-container p-5">
            <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100x100" thumbnail />
          </Col>
          <Col xxl={6} xl={12} className="main-container-2 p-5">
            <div className="demo-container">
              <h2>Now, Set up and <br/> grow your company</h2>
              <p>We offer many product that optimize your company, set up now! and group up your business</p>
              <button className="app-button">Demo</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
