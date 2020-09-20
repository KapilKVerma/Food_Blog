import React, { useState } from "react";
import "./Container.css";
import { Button, Row, Col, Modal } from "react-bootstrap";

const Container = (props) => {
  const { user } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-user">
      <Row>
        <Col className="container-title">{user.name}</Col>
        <Col className="container-link">
          <div onClick={handleShow}>View</div>
        </Col>
      </Row>

      <div className="container-body">{user.comment}</div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{user.comment}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            size="sm"
            style={{
              borderRadius: "50px",
              padding: "5px 15px",
              marginTop: "2%",
            }}
            className="shadow"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Container;
