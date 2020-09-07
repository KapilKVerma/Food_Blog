import React, { useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const [displayMenu, setDisplayMenu] = useState("menu-display");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Row className="navigation ">
        <Col>
          <Row>
            <Col className="hamburger" lg={4}>
              <i className="fas fa-bars" onClick={handleShow}></i>
            </Col>
            <Col className="blog-title" lg={4}>
              <Link to="/" style={{ color: "black" }}>
                Food_blog
              </Link>
            </Col>
            <Col className="menu-button" lg={4}>
              <Link to="/subscribe">
                <Button size="sm" className="m-2 button">
                  Subscribe
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="sm" className="m-2 button">
                  Sign In
                </Button>
              </Link>
              <Button size="sm" className="m-2 button">
                Sign Out
              </Button>
              <Link to="/signup">
                <Button size="sm" className="m-2 button">
                  Sign Up
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Body
            style={{
              textAlign: "center",
            }}
          >
            <h4>
              <Link to="/about" className="menu-links">
                About
              </Link>
            </h4>
            <h4>
              <Link to="/searchrecepies" className="menu-links">
                Recepies
              </Link>
            </h4>
            <h4>
              <Link to="/subscribe" className="menu-links">
                Suscribe
              </Link>
            </h4>
            <h4>
              <Link to="/signup" className="menu-links">
                Sign Up
              </Link>
            </h4>
            <h4>Sign Out</h4>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </React.Fragment>
  );
};

export default Navigation;
