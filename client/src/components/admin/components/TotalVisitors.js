import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const TotalVisitors = () => {
  return (
    <div>
      <Row>
        <Col> Total Visitors: </Col>
      </Row>
      <Row>
        <Card
          style={{
            textAlign: "center",
            width: "100%",
            padding: "3rem 1rem",
            margin: "0 1rem",
            fontSize: "6rem",
            backgroundColor: "#A91C4B",
            color: "white",
          }}
        >
          <div>34</div>
        </Card>
      </Row>
    </div>
  );
};

export default TotalVisitors;
