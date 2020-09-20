import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../error/ErrorNotice";
import Axios from "axios";

const Signup = () => {
  const [signUpData, setSignUpdata] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = signUpData;
      // Resigter Route
      await Axios.post("http://localhost:5000/user/register", newUser);
      const email = signUpData.email;
      const password = signUpData.password;
      // Login Route
      const loginRes = await Axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setSignUpdata({ ...signUpData, name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setSignUpdata({ ...signUpData, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Password"
            onChange={(e) => {
              setSignUpdata({ ...signUpData, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Confirm password"
            onChange={(e) => {
              setSignUpdata({ ...signUpData, passwordCheck: e.target.value });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button"
          onClick={onSubmit}
        >
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Signup;
