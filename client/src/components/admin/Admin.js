import React from "react";
import { Card, Row, Tab, Nav, Col, Container } from "react-bootstrap";
import NewRecipe from "./NewRecipe";
import Recipes from "./Recipes";
import Categories from "./Categories";
import Analysis from "./Analysis";
import Profile from "./Profile";

import "./Admin.css";

const Admin = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        height: "100%",
        paddingBottom: "5%",
      }}
    >
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row className="justify-content-start " style={{ paddingTop: "10%" }}>
            <Col>
              <Card
                className="p-3 card-regular"
                style={{ backgroundColor: "#ffc95c" }}
              >
                <Card.Body>
                  <h2>Admin Account</h2>
                  <h5>Amit</h5> Amit@xyz.com
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center pt-3 m-0">
            <Col
              lg={2}
              className="m-0 p-0"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "5px",
                height: "100%",
                position: "sticky",
                top: "12%",
              }}
            >
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Analysis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Recipes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">New Recipes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Profile</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Card className="p-5 card-regular">
                    <Analysis />
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Card className="p-5 card-regular">
                    <Recipes />
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Card className="p-5 card-regular">
                    <NewRecipe />
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Card className="p-5 card-regular">
                    <Categories />
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Card className="p-5 card-regular">
                    <Profile />
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Admin;
