import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const State = styled.h3`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <div>
      <Temp>{temp}°C</Temp>
      <State>{condition}</State>
    </div>
  );
};

export default Condition;
