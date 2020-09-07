import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const CardRecepie = (props) => {
  const { recepie } = props;
  console.log(props);
  return (
    <Card className="card-shadow">
      <Card.Img variant="top" src={recepie.image} />
      <div className="card-title-style">{recepie.name}</div>
      <Card.Body>
        <Card.Title>
          <Row className="card-user-responses">
            <Col lg={6}>Likes: 45</Col>
            <Col lg={6} style={{ textAlign: "end" }}>
              Comments: 10
            </Col>
          </Row>
        </Card.Title>
        <Card.Text className="card-body-style ">
          {recepie.description}...
        </Card.Text>
        <Button
          href="/recepie"
          variant="dark"
          size="sm"
          style={{
            borderRadius: "50px",
            padding: "5px 15px",
          }}
          className="shadow"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardRecepie;
