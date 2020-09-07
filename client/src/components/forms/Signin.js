import React from "react";
import { Form, Button, Row, Col, Card, Jumbotron } from "react-bootstrap";

const Signin = () => {
  return (
    <React.Fragment>
      <Row
        className="justify-content-center signin-form"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <Col lg={4}>
          <Jumbotron className="box-shadow">
            <h3
              style={{
                textAlign: "center",
                padding: "3%",
              }}
            >
              Sign In
            </h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="button">
                Sign in
              </Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Signin;
