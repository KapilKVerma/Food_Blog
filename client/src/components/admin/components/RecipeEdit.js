import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const RecipeEdit = (props) => {
  const { show, handleClose, recipe } = props;
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{recipe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Recipe Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Description" />
            </Form.Group>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Recipe Image" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preparation</Form.Label>
              <Form.Control type="text" placeholder="Ingredients" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preparation</Form.Label>
              <Form.Control type="text" placeholder="Step 1" className="mb-2" />
              <Form.Control type="text" placeholder="Step 2" className="mb-2" />
              <Form.Control type="text" placeholder="Step 3" className="mb-2" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Preparation Time in minutes"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                {/* {categories &&
                  categories.map((category) => {
                    return <option key={category._id}>{category.name}</option>;
                  })} */}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default RecipeEdit;
