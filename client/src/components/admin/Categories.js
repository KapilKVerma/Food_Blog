import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState();
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
  });

  const handleCategoryCreate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", newCategory.name.toUpperCase());
    data.append("image", newCategory.image);

    axios
      .post("/category/new", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCategory = (id) => {
    axios
      .delete(`/category/${id}/delete`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("/category/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleDeleteCategory, handleCategoryCreate]);

  return (
    <div>
      <h5>All Categories</h5>
      <hr></hr>
      <Row className="pb-4">
        {categories &&
          categories.map((category) => {
            return (
              <Col lg={3} key={category._id}>
                <Card className="p-3" style={{ textAlign: "center" }}>
                  {category.name}

                  <Button
                    variant="dark"
                    size="sm"
                    style={{
                      borderRadius: "50px",
                      fontSize: "10px",
                      padding: "5px 15px ",
                    }}
                    onClick={() => handleDeleteCategory(category._id)}
                  >
                    Delete
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
      <h5> Add New Category</h5>
      <hr></hr>

      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Category Name"
            onChange={(e) => {
              setNewCategory({
                ...newCategory,
                name: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Category Image"
            onChange={(e) => {
              setNewCategory({
                ...newCategory,
                image: e.target.files[0],
              });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleCategoryCreate}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Categories;
