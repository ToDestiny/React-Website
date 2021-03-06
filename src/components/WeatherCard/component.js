import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Location from "components/WeatherCard/Location";
import Condition from "components/WeatherCard/Condition";
import Icon from "components/WeatherCard/Icon";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    // Hot weather mechanics
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 100;
    bg = `linear-gradient(
      to top,
      rgb(255, ${Math.abs(highColor)}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    )`;
  } else if (temp <= 12) {
    // Cold weather mechanics
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 100;
    bg = `linear-gradient(
      to top,
      rgb(0, ${Math.abs(highColor)}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    )`;
  }
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
