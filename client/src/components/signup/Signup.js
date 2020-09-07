import React from "react";
import Signupform from "../forms/Signup";
import { Row, Col, Jumbotron } from "react-bootstrap";

const Signup = () => {
  return (
    <Row
      className="justify-content-center signup-form"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80)",
      }}
    >
      <Col lg={4}>
        <Jumbotron className="box-shadow">
          <h3 style={{ textAlign: "center", padding: "3%" }}>Sign Up</h3>
          <Signupform />
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Signup;
