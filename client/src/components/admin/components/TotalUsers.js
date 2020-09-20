import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/all")
      .then((res) => {
        setTotalUsers(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col> Total Users:</Col>
      </Row>
      <Row>
        <Card
          style={{
            textAlign: "center",
            width: "100%",
            padding: "3rem 1rem",
            margin: "0 1rem",
            fontSize: "6rem",
            backgroundColor: "#CA3912",
            color: "white",
          }}
        >
          {totalUsers ? <div>{totalUsers}</div> : "0"}
        </Card>
      </Row>
    </div>
  );
};

export default TotalUsers;
