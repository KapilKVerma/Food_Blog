import React, { useState, useContext } from "react";
import { Form, Button, Row, Col, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../error/ErrorNotice";
import UserContext from "../../context/UserContext";
import Axios from "axios";

const Signin = () => {
  const [signInData, setSignIndata] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = signInData.email;
      const password = signInData.password;
      const signInRes = await Axios.post(
        `${process.env.REACT_APP_BACKEND}/user/login`,
        {
          //Not Working

          email,
          password,
        }
      );
      setUserData({
        token: signInRes.data.token,
        user: signInRes.data.user,
      });
      localStorage.setItem("auth-token", signInRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };
  return (
    <React.Fragment>
      <Row
        className="justify-content-center signin-form"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <Col lg={4}>
          <Jumbotron className="box-shadow">
            <h3
              style={{
                textAlign: "center",
                padding: "3%",
              }}
            >
              Sign In
            </h3>
            {error && (
              <ErrorNotice
                message={error}
                clearError={() => setError(undefined)}
              />
            )}
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setSignIndata({ ...signInData, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setSignIndata({ ...signInData, password: e.target.value });
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="button"
                onClick={onSubmit}
              >
                Sign in
              </Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Signin;
