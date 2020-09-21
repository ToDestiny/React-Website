import React from "react";

import Clouds from "img/Mostly Cloudy-2x.png";
import Clear from "img/Mostly Sunny-2x.png";
import Haze from "img/Haze-2x.png";
import Hail from "img/Hail-2x.png";
import Fog from "img/Fog-2x.png";
import Tornado from "img/Tornado-2x.png";
import Dust from "img/Dust-2x.png";
import Mist from "img/Fog-2x.png";
import Snow from "img/Snow-2x.png";
import Rain from "img/Rain-2x.png";
import Drizzle from "img/Drizzle-2x.png";
import Thunderstorm from "img/Thunderstorm-2x.png";

import styled from "@emotion/styled";

const Icon = props => {
  const Icon = styled.img`width: 40%;`;

  switch (props.condition) {
    case "Clouds":
      return <Icon src={Clouds} alt="Weather Icon" />;
    case "Clear":
      return <Icon src={Clear} alt="Weather Icon" />;
    case "Haze":
      return <Icon src={Haze} alt="Weather Icon" />;
    case "Hail":
      return <Icon src={Hail} alt="Weather Icon" />;
    case "Fog":
      return <Icon src={Fog} alt="Weather Icon" />;
    case "Tornado":
      return <Icon src={Tornado} alt="Weather Icon" />;
    case "Dust":
      return <Icon src={Dust} alt="Weather Icon" />;
    case "Mist":
      return <Icon src={Mist} alt="Weather Icon" />;
    case "Snow":
      return <Icon src={Snow} alt="Weather Icon" />;
    case "Rain":
      return <Icon src={Rain} alt="Weather Icon" />;
    case "Drizzle":
      return <Icon src={Drizzle} alt="Weather Icon" />;
    case "Thunderstorm":
      return <Icon src={Thunderstorm} alt="Weather Icon" />;
    default:
      return <Icon src={Mist} alt="Weather Icon" />;
  }
};

export default Icon;
