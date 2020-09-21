import React from "react";
import styled from "@emotion/styled";

const Contact = ({ props }) => {
  const ContactText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 100;
    color: white;
    background: black;
  `;

  return (
    <div>
      <ContactText>Contact</ContactText>
    </div>
  );
};

export default Contact;
