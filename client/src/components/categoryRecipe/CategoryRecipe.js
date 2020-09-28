import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardRecipe from "../../UIcomponents/Cards/CardRecipe";

const CategoryRecipe = ({ match }) => {
  const [category, setCategory] = useState();
  const categoryId = match.params.id;
  const [categoryRecipe, setCategoryrecipe] = useState();

  const getCategoryId = (recipes) => {
    let recipesfilter = recipes.filter((recipe) => {
      return recipe.category === categoryId;
    });
    setCategoryrecipe(recipesfilter);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/recipe/`)
      .then((res) => {
        getCategoryId(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND}/category/${categoryId}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <Card>
        {category && (
          <Jumbotron
            className="page-header shadow"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_ASSETS_IMAGES}/images/category/${category.image})`,
            }}
          >
            <Container>
              <div className="page-body">
                <div
                  className="page-body-heading"
                  style={{ fontFamily: "Pacifico", fontSize: "4rem" }}
                >
                  {category.name}
                </div>
              </div>
            </Container>
          </Jumbotron>
        )}
        <Card.Body>
          <Container>
            <Row>
              {categoryRecipe &&
                categoryRecipe.map((recipe) => {
                  return (
                    <Col lg={4} key={recipe._id}>
                      <CardRecipe recipe={recipe} />
                    </Col>
                  );
                })}{" "}
            </Row>{" "}
            <Link to="/searchrecipes" style={{ color: "black" }}>
              More recipes...
              <i className="fas fa-search"></i>
            </Link>
          </Container>
        </Card.Body>{" "}
      </Card>
    </div>
  );
};

export default CategoryRecipe;
