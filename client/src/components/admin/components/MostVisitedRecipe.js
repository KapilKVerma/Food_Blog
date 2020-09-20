import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";

const MostVisitedRecipe = () => {
  const [recipes, setRecipes] = useState();

  const findMostViewedRecipe = (recipesData) => {
    let recipesViews = [];
    for (let i = 0; i < recipesData.length; i++) {
      recipesViews.push(recipesData[i].views);
    }
    const views = recipesViews.sort(function (a, b) {
      return b - a;
    });
    const recipes = recipesData.filter((r) => {
      return r.views > views[2];
    });
    setRecipes(recipes);
  };

  useEffect(() => {
    axios
      .get("/recipe/")
      .then((res) => {
        findMostViewedRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div> Most Viewed Recipes</div>
      {recipes &&
        recipes.map((recipe) => {
          return (
            <Card className="shadow p-0 mb-2" key={recipe._id}>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      backgroundImage: `url(/public/images/recipes/${recipe.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      color: "black",
                      height: "100%",
                    }}
                  ></div>
                </Col>
                <Col lg={6} className="pt-5 pb-1 ">
                  <h6>{recipe.name} </h6>
                  <h6>{recipe.views} Views</h6>
                </Col>
              </Row>
            </Card>
          );
        })}
    </div>
  );
};

export default MostVisitedRecipe;
