import React from "react";
import {
  Jumbotron,
  Container,
  Form,
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const SearchRecepies = () => {
  const type = "checkbox";
  const categories = ["Italian", "Thai", "Indian", "Mexicon"];
  const description =
    "Some quick example text to build on the card title and make up the bulk of the card's content";
  return (
    <React.Fragment>
      <Jumbotron
        className="page-header"
        style={{
          paddingTop: "8%",
          paddingBottom: "1%",
          backgroundImage: `url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)`,
        }}
      >
        <Container>
          <Form style={{ margin: "120px 0px" }}>
            <h1>Discover different flavours of happiness.</h1>
            <input
              type="text"
              placeholder="Search Recepies..."
              className="search-bar"
            />

            <Button
              variant="success"
              className="search-button mt-5
            "
            >
              <i className="fas fa-search pr-2"></i>
              Search
            </Button>
          </Form>
        </Container>
      </Jumbotron>

      <Row className=" p-4">
        <Col lg={3}>
          <Card className="card">
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
              <Card.Text className="card-body-style ">
                {description}...
              </Card.Text>
              <Button
                href="/recepie"
                variant="dark"
                size="sm"
                style={{
                  borderRadius: "50px",
                  padding: "5px 15px",
                }}
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SearchRecepies;
