import React from "react";
import { Card, Row, Tab, Nav, Col, Button } from "react-bootstrap";
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
        paddingBottom: "1%",
      }}
    >
      <Tab.Container defaultActiveKey="first">
        <Row className="justify-content-start " style={{ paddingTop: "6%" }}>
          <Col>
            <Card
              className="card-regular"
              style={{ backgroundColor: "#ffc95c", borderRadius: "0px" }}
            >
              <Card.Body>
                <h2>Dashboard</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center m-1 mt-2">
          <Col
            lg={2}
            className="m-0 p-0"
            style={{
              borderRadius: "0px",
              height: "60vh",
              position: "sticky",
              top: "12%",
            }}
          >
            <div className="pl-1">
              <Nav
                variant="pills"
                className="flex-column "
                style={{ backgroundColor: "white", color: "white" }}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    style={{ borderRadius: "0px", padding: "15px" }}
                  >
                    <i className="fas fa-chart-line pr-3"></i> Analysis
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    style={{ borderRadius: "0px", padding: "15px" }}
                  >
                    <i className="fas fa-utensils pr-3"></i> Recipes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    style={{ borderRadius: "0px", padding: "15px" }}
                  >
                    <i className="fas fa-plus-square pr-3"></i> New Recipes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fourth"
                    style={{ borderRadius: "0px", padding: "15px" }}
                  >
                    <i className="fas fa-sitemap pr-3"></i> Categories
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fifth"
                    style={{ borderRadius: "0px", padding: "15px" }}
                  >
                    <i className="far fa-id-card pr-3"></i> Profile
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col lg={10} className="pr-0 mr-0">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Card
                  className="p-5 card-regular"
                  style={{ borderRadius: "0px" }}
                >
                  <Analysis />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card
                  className="p-5 card-regular"
                  style={{ borderRadius: "0px" }}
                >
                  <Recipes />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Card
                  className="p-5 card-regular"
                  style={{ borderRadius: "0px" }}
                >
                  <NewRecipe />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Card
                  className="p-5 card-regular"
                  style={{ borderRadius: "0px" }}
                >
                  <Categories />
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Card
                  className="p-5 card-regular"
                  style={{ borderRadius: "0px" }}
                >
                  <Profile />
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Admin;
