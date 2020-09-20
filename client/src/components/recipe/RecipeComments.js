import React, { useEffect, useState } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import axios from "axios";

const RecipeComments = (props) => {
  const { commentId } = props;
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/comment/${commentId}`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [commentId]);
  return (
    <div>
      {comment ? (
        <Row className=" m-0 p-1 " style={{ width: "100%" }} key={comment}>
          <div
            className=" m-0 p-2 "
            style={{
              backgroundColor: "#fdc657",
              borderRadius: "50px",
            }}
          >
            <Button
              variant="dark"
              size="sm"
              style={{
                borderRadius: "50px",
                padding: "2px 12px",
                fontSize: "12px",
              }}
              className="shadow mr-3"
              onClick={handleShow}
            >
              View
            </Button>
            {comment.comment.slice(0, 30)} ...
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{comment.author.toUpperCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{comment.comment}</Modal.Body>
          </Modal>
        </Row>
      ) : null}
    </div>
  );
};

export default RecipeComments;
