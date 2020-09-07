import React from "react";
import { Jumbotron, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Body from "../body/Body";

const Home = () => {
  return (
    <div>
      <Jumbotron
        className="page-header"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)`,
        }}
      >
        <h2>Hello, world!</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <Container>
          <Form
            style={{
              margin: "10px",
              textAlign: "center",

              fontSize: "30px",
            }}
          >
            <Link to="/searchrecepies">
              Search Recepies...
              <i
                className="fas fa-search"
                style={{ fontSize: "30px", display: "inline" }}
              ></i>
            </Link>
          </Form>
        </Container>
        <a href="#recepie">
          <i className="fas fa-arrow-circle-down page-down-link"></i>
        </a>
      </Jumbotron>
      <Body />
    </div>
  );
};

export default Home;
