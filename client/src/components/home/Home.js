import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Body from "../body/Body";

const Home = () => {
  return (
    <div>
      <Jumbotron
        className="page-header shadow"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg)`,
        }}
      >
        <Container>
          <div className="page-body">
            <div className="page-body-heading">Amit Arora's Kitchen.</div>
            <p>This text to be taken by amit.</p>
            <Link to="/searchrecipes">
              Search Recipes...
              <i className="fas fa-search"></i>
            </Link>{" "}
          </div>
          <div>
            <a href="#recipe">
              <i className="fas fa-arrow-circle-down page-down-link"></i>
            </a>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Body />
      </Container>
    </div>
  );
};

export default Home;
