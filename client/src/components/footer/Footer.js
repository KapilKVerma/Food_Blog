import React from "react";
import {} from "react-bootstrap";

const Footer = () => {
  const modelDetails = {
    firstname: "Amit",
    lastname: "Arora",
    number: 56565656,
    email: {
      primary: "xyz@gamil.com",
    },
  };
  return (
    <div className="footer p-5">
      <div>
        {modelDetails.firstname.toUpperCase()}{" "}
        {modelDetails.lastname.toUpperCase()}
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {modelDetails.number}
        &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; {modelDetails.email.primary}
      </div>
      <div>© 2020 Web Form., All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
