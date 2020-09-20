import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const NewRecipe = () => {
  const [categories, setCategories] = useState();
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    image: "",
    preparationtime: "",
    categories: "",
    youtubeLink: "",
  });

  useEffect(() => {
    axios
      .get("/category/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newRecipe);
    const data = new FormData();

    data.append("name", newRecipe.name.trim());
    data.append("description", newRecipe.description);
    data.append("image", newRecipe.image);
    data.append("ingredients", newRecipe.ingredients);
    data.append("preparation", newRecipe.preparation);
    data.append("preparationtime", newRecipe.preparationtime);
    data.append("categories", newRecipe.categories);
    data.append("youtubeLink", newRecipe.youtubeLink);

    axios
      .post("/recipe/new", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <h5>Add New Recipe</h5>
      <hr></hr>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Recipe Name"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                name: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Description"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                description: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            label="Recipe Image"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                image: e.target.files[0],
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Inredients</Form.Label>

          <Form.Control
            type="text"
            placeholder="Ingredients"
            className="mb-2"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                ingredients: e.target.value,
              });
            }}
          />
          <Form.Text className="text-muted">
            Please add ' ; ' after each ingredient.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Preparation Steps</Form.Label>

          <Form.Control
            type="text"
            placeholder="Step"
            className="mb-2"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                preparation: e.target.value,
              });
            }}
          />
          <Form.Text className="text-muted">
            Please add ' ; ' after each step.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Preparation time in minutes"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                preparationtime: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                categories: e.target.value.trim(),
              });
            }}
          >
            <option>Select</option>
            {categories &&
              categories.map((category) => {
                return (
                  <option
                    key={category._id}
                    className="mb-2"
                    style={{ fontSize: "14px" }}
                  >
                    {category.name}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Youtube Link"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                youtubeLink: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default NewRecipe;
