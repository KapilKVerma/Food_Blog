import React from "react";
import { Jumbotron, Row, Col, Card, Button, Form } from "react-bootstrap";
import Container from "../../UIcomponents/Containers/Container";

const Recepie = () => {
  const users = [
    {
      name: "User-1",
      comment: "This is the comment of user-1",
    },
    {
      name: "User-2",
      comment: "This is from user 2",
    },
  ];

  const prepTime = "10";
  return (
    <React.Fragment>
      <Jumbotron
        className="page-header"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
        }}
      >
        <h1 style={{ color: "white" }}>Preperation Video Gif</h1>
      </Jumbotron>

      <Row className="m-1">
        <Col lg={3} className="m-0 p-3">
          <Card
            className="card-regular"
            style={{ position: "sticky", top: "110px" }}
          >
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
            <div className="card-title-style">Italian</div>
            <Card.Body>
              <Card.Title>
                <Row className="card-user-responses">
                  <Col lg={6}>Likes: 45</Col>
                  <Col lg={6} style={{ textAlign: "end" }}>
                    Comments: 10
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                <h5>Comments:</h5>
                {users &&
                  users.map((user) => {
                    return (
                      <Row>
                        <Container user={user} />
                      </Row>
                    );
                  })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="m-0 p-3">
          <Card className="card-regular">
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col className="pl-4 m-4">
                    <h2>Description</h2>
                    <hr></hr>
                    <p>
                      Combine the chicken with the yogurt, ginger garlic paste,
                      chili powder, garam masala, salt, turmeric, and cumin and
                      mix to coat well. On a cutting board, slice the chicken
                      into bite size pieces. Combine the chicken with the
                      yogurt, ginger garlic paste, chili powder, garam masala,
                      salt, turmeric, and cumin and mix to coat well. Combine
                      the chicken with the yogurt, ginger garlic paste, chili
                      powder, garam masala, salt, turmeric, and cumin and mix to
                      coat well. On a cutting board, slice the chicken into bite
                      size pieces. Combine the chicken with the yogurt, ginger
                      garlic paste, chili powder, garam masala, salt, turmeric,
                      and cumin and mix to coat well.
                    </p>
                  </Col>
                </Row>
                <Row className="m-4">
                  <Col lg={3}>
                    <h4>Ingrediants</h4>
                    <hr></hr>
                    <ul className="ml-0 pl-4 pr-4">
                      <li>xyz 1</li>
                      <li>xyz 1</li>
                    </ul>
                  </Col>
                  <Col lg={7}>
                    <h4>Preparation</h4>
                    <hr></hr>
                    <ol className="ml-0 pl-4 pr-4">
                      <li>
                        On a cutting board, slice the chicken into bite size
                        pieces.
                      </li>
                      <li>
                        Combine the chicken with the yogurt, ginger garlic
                        paste, chili powder, garam masala, salt, turmeric, and
                        cumin and mix to coat well.
                      </li>
                      <li>
                        Combine the chicken with the yogurt, ginger garlic
                        paste, chili powder, garam masala, salt, turmeric, and
                        cumin and mix to coat well.
                      </li>
                      <li>
                        On a cutting board, slice the chicken into bite size
                        pieces.
                      </li>
                    </ol>
                  </Col>
                  <Col>
                    <h6>Preparation Time</h6>

                    <h3>{prepTime} minutes</h3>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Row>
            <Card className="p-5 m-3 card-regular" style={{ width: "100%" }}>
              <Form>
                <Form.Control
                  as="textarea"
                  placeholder="Write your comment.."
                  rows="2"
                />
                <Button
                  href="/recepie"
                  variant="dark"
                  size="sm"
                  style={{
                    borderRadius: "50px",
                    padding: "5px 15px",
                    marginTop: "2%",
                  }}
                  className="shadow"
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Recepie;
