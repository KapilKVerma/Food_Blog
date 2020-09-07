import React from "react";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="Password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="button">
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Signup;
