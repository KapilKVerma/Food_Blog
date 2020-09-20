import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const Category = (props) => {
  const [category, setCategory] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/${props.id}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);
  return (
    <div>
      {category && (
        <Card
          style={{
            backgroundImage: `url(${category.image})`,
            height: "15vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            courser: "pointer", /// think it again
          }}
          className="mt-2 cw-100"
        >
          <Card.Title className="card-title-style" style={{ fontSize: "2rem" }}>
            {category.name}
          </Card.Title>
          <Card.Body></Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Category;
