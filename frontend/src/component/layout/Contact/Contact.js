import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:harshit2020cs198@gmail.com">
        <Button>Contact: harshit2020cs@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
