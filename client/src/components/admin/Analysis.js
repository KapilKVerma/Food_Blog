import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import TotalVisitors from "./components/TotalVisitors";
import TotalSubscriptions from "./components/TotalSubscriptions";
import MostVisitedRecipe from "./components/MostVisitedRecipe";
import TotalUsers from "./components/TotalUsers";

const Analysis = () => {
  return (
    <div>
      <h5>Analysis and Statistics</h5>
      <hr></hr>
      <Row className="mb-3">
        <Col lg={6}>
          <Card className="shadow p-3">
            <TotalVisitors />
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="shadow p-3">
            <MostVisitedRecipe />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="shadow p-3">
            <TotalUsers />
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="shadow p-3">
            <TotalSubscriptions />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analysis;
