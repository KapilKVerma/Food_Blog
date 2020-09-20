import React from "react";
import { Button, Container } from "react-bootstrap";
import "./ErrorNotice.css";

const ErrorNotice = (props) => {
  return (
    <Container>
      <div className="error-notice">
        <span style={{ textAlign: "left" }}>{props.message}</span>
        <Button variant="dark" onClick={props.clearError}>
          X
        </Button>
      </div>
    </Container>
  );
};

export default ErrorNotice;
