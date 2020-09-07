import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const SubscribeForm = () => {
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

        <Button variant="primary" type="submit" className="button">
          Subscribe
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default SubscribeForm;
