import React, { useState, useEffect } from "react";
import { Card, Row, Button } from "react-bootstrap";
import axios from "axios";

const CardRecipe = (props) => {
  const { recipe } = props;
  const [views, setViews] = useState("");

  const handleViews = () => {
    setViews(views + 1);

    axios
      .put(
        `${process.env.REACT_APP_BACKEND}/recipe/${recipe._id}/updateviews`,
        {
          views: views + 1,
        }
      )
      .then((res) => console.log(res.data.message))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (recipe) setViews(recipe.views);
  }, [recipe]);

  return (
    <Card className="card-shadow mb-4">
      {recipe ? (
        <>
          <div
            style={{
              backgroundImage: `url(${process.env.REACT_APP_ASSETS_IMAGES}/images/recipes/${recipe.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "30vh",
              borderRadius: "5px",
            }}
          />
          <div className="card-title-style">{recipe.name}</div>{" "}
          <Card.Body>
            <Card.Title>
              <Row className="card-user-responses">
                <div style={{ width: "50%" }}> Views: {views}</div>
                <div style={{ width: "50%", textAlign: "end" }}>
                  Comments: {recipe.comments.length}
                </div>
              </Row>
            </Card.Title>
            <Card.Text className="card-body-style ">
              {recipe.description.slice(0, 80)}...
            </Card.Text>
            <Button
              href={"/recipe"}
              variant="dark"
              size="sm"
              style={{
                borderRadius: "50px",
                padding: "5px 15px",
              }}
              className="shadow"
              onClick={handleViews}
            >
              Read More
            </Button>
          </Card.Body>{" "}
        </>
      ) : null}
    </Card>
  );
};

export default CardRecipe;
