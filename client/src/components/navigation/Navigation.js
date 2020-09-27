import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./Navigation.css";

const Navigation = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
    handleClose();
  };

  return (
    <React.Fragment>
      <div className="navigation ">
        <Row>
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
                {userData.user ? (
                  <Button size="sm" className="m-2 button" onClick={signOut}>
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link to="/subscribe">
                      <Button size="sm" className="m-2 button">
                        Subscribe
                      </Button>
                    </Link>
                    <Link to="/signin">
                      <Button size="sm" className="m-2 button">
                        Sign In
                      </Button>
                    </Link>{" "}
                    <Link to="/signup">
                      <Button size="sm" className="m-2 button">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                {userData.user && userData.user.name === "admin" ? (
                  <Link to="/admin">
                    <Button size="sm" className="m-2 button">
                      Admin
                    </Button>
                  </Link>
                ) : null}{" "}
                {userData.user ? (
                  <span className="user-signedin">
                    {userData.user.name[0].toUpperCase()}
                  </span>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Body
            style={{
              textAlign: "center",
            }}
          >
            <h4>
              <Link to="/" className="menu-links" onClick={handleClose}>
                Home
              </Link>
            </h4>
            <h4>
              <Link to="/about" className="menu-links" onClick={handleClose}>
                About
              </Link>
            </h4>
            <h4>
              <Link
                to="/searchrecepies"
                className="menu-links"
                onClick={handleClose}
              >
                Recipes
              </Link>
            </h4>
            {userData.user ? (
              <Button className="button" onClick={signOut}>
                Sign Out
              </Button>
            ) : (
              <div>
                <h4>
                  <Link
                    to="/subscribe"
                    className="menu-links"
                    onClick={handleClose}
                  >
                    Suscribe
                  </Link>
                </h4>
                <h4>
                  <Link
                    to="/signin"
                    className="menu-links"
                    onClick={handleClose}
                  >
                    Sign In
                  </Link>
                </h4>
                <h4>
                  <Link
                    to="/signup"
                    className="menu-links"
                    onClick={handleClose}
                  >
                    Sign Up
                  </Link>
                </h4>
              </div>
            )}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </React.Fragment>
  );
};

export default Navigation;
