import React, { useState, useEffect, useContext } from "react";
import { Jumbotron, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import UserContext from "../../context/UserContext";
import RecipeComments from "./RecipeComments";
import "./Recipe.css";

const Recipe = ({ match }) => {
  const { userData } = useContext(UserContext);
  const [recipe, setRecipe] = useState("This page is for recipe details.");

  const [commentData, setCommentData] = useState({
    comment: "",
    recipeId: "",
  });

  const submitComment = (e) => {
    e.preventDefault();

    const comment = commentData.comment;
    const recipeId = match.params.id;
    const user = userData.user.id;

    axios
      .post(`${process.env.REACT_APP_BACKEND}/comment/new`, {
        comment,
        recipeId,
        user,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/recipe/${match.params.id}`)
      .then((res) => {
        // setRecipe(res.data);
        console.log(res.data);
      });
    alert("This is recipe page");
  }, [match.params.id]);

  return (
    <React.Fragment>
      {recipe && (
        <Jumbotron
          className="page-header page-header-hide shadow"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_ASSETS_IMAGES}/images/recipes/${recipe.image})`,
            height: "70vh",
          }}
        ></Jumbotron>
      )}
      {/*   {recipe && (
        <Row className="m-1 pt-5">
          <Col lg={3} className="m-3 ">
            <Row>
              <Card
                className=" recipe-image"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_ASSETS_IMAGES}/images/recipes/${recipe.image})`,
                }}
              >
                <div className="card-title-style">{recipe.name}</div>
              </Card>
            </Row>
            <Row className="card-user-responses mt-2 mb-2">
              <div style={{ width: "50%" }}> Views: {recipe.views}</div>
              <div style={{ width: "50%", textAlign: "end" }}>
                Comments: {recipe.comments.length}
              </div>
            </Row>
            {recipe.comments &&
              recipe.comments.map((comment) => {
                return <RecipeComments commentId={comment} key={comment} />;
              })}
            {userData.user ? (
              <Row>
                <Card className="p-3 mt-3 cw-100 card-regular">
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Enter comment"
                        onChange={(e) => {
                          setCommentData({
                            ...commentData,
                            comment: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    {commentData.comment ? (
                      <Button
                        variant="success shadow"
                        size="sm"
                        onClick={submitComment}
                        style={{ borderRadius: "50px", padding: "5px 15px" }}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="dark shadow"
                        size="sm"
                        style={{ borderRadius: "50px", padding: "5px 15px" }}
                        disabled
                      >
                        Submit
                      </Button>
                    )}
                  </Form>
                </Card>
              </Row>
            ) : null}
          </Col>
          <Col lg={5}>
            <Row>
              <Card className="p-3 m-3 cw-100 card-regular">
                <Card.Body>
                  <Card.Title>Description</Card.Title>
                  <hr></hr>
                  <p>{recipe.description}</p>
                  <Card.Title>Ingredients</Card.Title>
                  <hr></hr>
                  <ul>
                    {recipe.ingredients &&
                      recipe.ingredients.split(";").map((ingredient) => {
                        return <li key={Math.random()}>{ingredient}</li>;
                      })}
                  </ul>
                  <Card.Title>Preparation</Card.Title>
                  <hr></hr>
                  <ol>
                    {recipe.preparation &&
                      recipe.preparation.split(";").map((step) => {
                        return <li key={Math.random()}>{step}.</li>;
                      })}
                  </ol>
                  <Card.Title>Preperation Time</Card.Title>
                  <hr></hr>
                  <p className="preperation-time">
                    {recipe.preparationtime} minutes
                  </p>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col>
            <Row className="p-3">
              <iframe
                title="youtube1"
                width="100%"
                height="350"
                src={recipe.youtubeLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Row>
          </Col>
        </Row>
      )} */}
    </React.Fragment>
  );
};

export default Recipe;
