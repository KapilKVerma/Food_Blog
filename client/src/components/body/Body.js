import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardRecipe from "../../UIcomponents/Cards/CardRecipe";
import axios from "axios";

const Body = () => {
  const [recentRecipes, setRecentRecipes] = useState();
  const [categories, setCategories] = useState();
  const [popularRecipes, setPopularRecipes] = useState();

  const getRecentRecipes = (recipes, totalItems) => {
    const recipe = [];
    for (let i = totalItems - 1; i > totalItems - 3; i--) {
      recipe.push(recipes[i]);
    }
    setRecentRecipes(recipe);
  };

  const getPopularRecipes = (recipes) => {
    let recipeViews = [];
    let views = [];
    for (let i = 0; i < recipes.length; i++) {
      recipeViews.push(recipes[i].views);
    }
    recipeViews.sort(function (a, b) {
      return b - a;
    });
    const num = Math.round(recipeViews.length / 2);

    views = recipes.filter((r) => {
      return r.views > recipeViews[num];
    });
    setPopularRecipes(views);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/recipe/`)
      .then((res) => {
        getRecentRecipes(res.data, res.data.length);
        getPopularRecipes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND}/category/`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="m-3" id="recipe">
      <Row className="mt-5">
        <Col>
          <h1 className="ml-0">Recent Recipes</h1>
          <hr></hr>
          <Row>
            {recentRecipes &&
              recentRecipes.map((recipe) => {
                return (
                  <Col lg={4} key={Math.random()}>
                    <CardRecipe recipe={recipe} />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h1 className="ml-0">Popular Recipes</h1>
          <hr></hr>
          <Row>
            {popularRecipes &&
              popularRecipes.map((recipe) => {
                return (
                  <Col lg={4} key={recipe._id}>
                    <CardRecipe recipe={recipe} />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h1 className="ml-0">Popular Categories</h1>
          <hr></hr>
          <Row>
            {categories &&
              categories.map((category) => {
                return (
                  <Col
                    lg={3}
                    style={{ textAlign: "center", paddingTop: "2%" }}
                    key={category._id}
                  >
                    <Link to={"/categoryrecipes/" + category._id}>
                      <Card
                        className="categories card-shadow"
                        style={{
                          backgroundImage: `url(${process.env.REACT_APP_ASSETS_IMAGES}/images/category/${category.image})`,
                        }}
                      >
                        <Card.Body className="categories-body">
                          {category.name}
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Body;
