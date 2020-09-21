import React from "react";

import IdentityPicture from "img/main_pic.jpg";

import styled from "@emotion/styled";

const Picture = props => {
  const Icon = styled.img`
    width: 40%;
    border-radius: 50%;
  `;
  return <Icon src={IdentityPicture} alt="Anthony COLAS" />;
};

export default Picture;
