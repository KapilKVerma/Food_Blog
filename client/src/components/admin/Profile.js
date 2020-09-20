import React from "react";
import { Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <h5>Profile</h5>
      <hr></hr>
      <Row>
        <Col>
          <div
            style={{
              backgroundImage: `url(https://cdn.pixabay.com/photo/2015/08/16/12/38/cooking-890885_960_720.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: "black",
              height: "100%",
            }}
          ></div>
        </Col>
        <Col className="p-2">
          <div style={{ color: "#302E2D" }}>
            <li>
              Role: <h5>Admin/Owner</h5>
            </li>
            <li>
              Name: <h5>Amit Arora</h5>
            </li>
            <li>
              Email:<h5>Amit@gmail.com</h5>
            </li>
            <li>
              Interests:
              <h5>
                Writing, Drawing, Coding, Reading, Making, Health and Connecting
              </h5>
            </li>
            <li>
              About Me:
              <h5>
                My greatest strength is my written communication skills. My
                greatest strength is administering assistance. See, transferable
                skills (those in blue) are things you can use at any job in any
                industry.
              </h5>
            </li>
            <li>
              Passion:<h5>I am passionate aboute food.</h5>
            </li>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
