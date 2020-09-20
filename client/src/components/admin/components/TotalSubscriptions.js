import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
const TotalSubscriptions = () => {
  const [totalSubscriptions, setTotalSubscriptions] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/subscription").then((res) => {
      setTotalSubscriptions(res.data.length);
    });
  });
  return (
    <div>
      <Row>
        <Col>Total Subscribers:</Col>
      </Row>
      <Row>
        <Card
          style={{
            textAlign: "center",
            width: "100%",
            padding: "3rem 1rem",
            margin: "0 1rem",
            fontSize: "6rem",
            backgroundColor: "#300C47",
            color: "white",
          }}
        >
          {totalSubscriptions ? <div>{totalSubscriptions}</div> : "0"}
        </Card>
      </Row>
    </div>
  );
};

export default TotalSubscriptions;
