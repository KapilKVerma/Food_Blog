import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import ErrorNotice from "../error/ErrorNotice";

const SubscribeForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:5000/subscription/subscribe", userData)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        {message && (
          <ErrorNotice
            message={message.message.msgbdy}
            clearError={() => setMessage(undefined)}
          />
        )}
      </div>

      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="button"
          onClick={onSubmit}
        >
          Subscribe
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default SubscribeForm;
