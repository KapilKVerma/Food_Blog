import React from "react";
import Subscribeform from "../forms/Subscribe";
import { Row, Col, Jumbotron } from "react-bootstrap";

const Subscribe = () => {
  return (
    <Row
      className="justify-content-center signin-form"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
      }}
    >
      <Col lg={4}>
        <Jumbotron className="box-shadow">
          <h3 style={{ textAlign: "center", padding: "3%" }}>Subscribe</h3>
          <Subscribeform />
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Subscribe;
