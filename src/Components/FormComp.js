import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";

export default class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };

  render() {
    const { validated } = this.state;
    return (
      <Form className="m-5" noValidate validated={validated} onSubmit={this.handleSubmit}>
        <Row>
        <Form.Group as={Col} xxl="6" xl="12" className="mb-3" controlId="AppForm.InputText">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Your name" size="lg" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xxl="6" xl="12" className="mb-3" controlId="AppForm.InputEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" size="lg" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="AppForm.InputRole">
          <Form.Label>Role</Form.Label>
          <Form.Select required aria-label="Default select example" size="lg">
            <option value="Designer">Designer</option>
            <option value="Web Development">Web Development</option>
            <option value="Software Development">Software Development</option>
            <option value="Devops">Devops</option>
            <option value="Other">Other</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your role.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="AppForm.InputMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Write your message here"
            size="lg"
          />
          <Form.Control.Feedback type="invalid">
            Please fill in the message.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group required>
          <Form.Label>I choose to send information about:</Form.Label>
          <Form.Check type="checkbox" label="Marketing" />
          <Form.Check type="checkbox" label="News & Updates" />
          <Form.Check type="checkbox" label="Product Updates" />
          <Form.Check type="checkbox" label="None" />
          <Form.Control.Feedback type="invalid">
            Please choose one.
          </Form.Control.Feedback>
        </Form.Group>
        <button type="submit" className="app-button my-4">Submit</button>
      </Form>
    );
  }
}
