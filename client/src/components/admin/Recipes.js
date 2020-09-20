import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

import RecipeEdit from "./components/RecipeEdit";

const Recipes = () => {
  const [recipes, setRecipes] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteRecipe = (id) => {
    axios
      .delete(`http://localhost:5000/recipe/${id}/delete`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe/")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleDeleteRecipe]);

  return (
    <div>
      <h5>All Recipes</h5>
      <hr></hr>
      <Row>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <Col lg={3} key={recipe._id} className="mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/public/images/recipes/${recipe.image}`}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "14px" }}>
                      {recipe.name}
                    </Card.Title>
                    <Card.Text>
                      <Button
                        variant="dark"
                        size="sm"
                        style={{
                          borderRadius: "50px",
                          fontSize: "10px",
                          padding: "5px 15px ",
                        }}
                        onClick={() => handleDeleteRecipe(recipe._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="dark"
                        size="sm"
                        style={{
                          borderRadius: "50px",
                          fontSize: "10px",
                          padding: "5px 15px ",
                          marginLeft: "13%",
                        }}
                        onClick={handleShow}
                      >
                        Edit
                      </Button>
                      <RecipeEdit
                        recipe={recipe}
                        show={show}
                        handleClose={handleClose}
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Recipes;
