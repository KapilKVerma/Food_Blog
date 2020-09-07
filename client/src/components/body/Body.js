import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CardRecepie from "../../UIcomponents/Cards/CardRecepie";

const Body = () => {
  const Recepies = [
    {
      name: "Mexican",
      image:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      name: "Italian",
      image:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
  ];

  const Categories = [
    {
      name: "Mexican",
      image:
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    {
      name: "Italian",
      image:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Japanese",
      image:
        "https://images.unsplash.com/photo-1510081093134-df3e807c6a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Indian",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Persian",
      image:
        "https://images.unsplash.com/photo-1589963465863-bdc456005191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Breakfast",
      image:
        "https://images.unsplash.com/photo-1526127230111-0197afe94d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
    },
    {
      name: "Lunch",
      image:
        "https://images.unsplash.com/photo-1576866206724-c696f4c9fa06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Dinner",
      image:
        "https://images.unsplash.com/photo-1578815484572-fedc09af0d27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    },
  ];
  return (
    <div className="m-5">
      <div>
        <Row id="recepies">
          <Col lg={8}>
            <h1 className="pl-4">Recent Recepies</h1>
            <hr></hr>
            <Row>
              {Recepies &&
                Recepies.map((recepie) => {
                  return (
                    <Col lg={5}>
                      <CardRecepie recepie={recepie} />{" "}
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col lg={4}>
            <Card
              className="card-regular"
              style={{
                height: "100%",
                fontSize: "30px",
                padding: "5%",
                backgroundImage: `url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              Amit
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mt-5">
        <h1>Popular Recepies</h1>
        <hr></hr>
        <Row>
          {Recepies &&
            Recepies.map((recepie) => {
              return (
                <Col lg={3}>
                  <CardRecepie recepie={recepie} />{" "}
                </Col>
              );
            })}
        </Row>
      </div>
      <div className="mt-5">
        <h1>Popular Categories</h1>
        <hr></hr>
        <Row>
          {Categories &&
            Categories.map((category) => {
              return (
                <Col lg={3} style={{ textAlign: "center", paddingTop: "2%" }}>
                  <Card
                    className="categories card-shadow"
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    <Card.Body>{category.name}</Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default Body;
