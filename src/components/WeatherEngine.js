import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import WeatherCard from "components/WeatherCard/component";

const WeatherEngine = ({ location }) => {
  // Initialize state variables
  const [query, setQuery] = useState(""); //User query
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); //Error handling
  const [weather, setWeather] = useState({
    // To display and store weather for specific cities
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  // Defining the data fetching function
  const getWeather = async q => {
    setQuery(""); // Reset query
    setLoading(true); // Set loading to true while fetching data
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=b9cc2647ff2f920e969cd8ea1e1b1379`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country
      });
    } catch (error) {
      setError(true); // If any error, set to true
    }
    setLoading(false);
  };

  // Hook to use this code only once when the component is mounted
  useEffect(
    () => {
      getWeather(location);
    },
    [location]
  );

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error!
        <br />
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <PuffLoader color="red" />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
