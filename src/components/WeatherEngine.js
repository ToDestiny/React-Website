import React, { useState, useEffect } from "react";

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
  // Function to handle search queries from Users
  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };
  // Hook to use this code only once when the component is mounted
  useEffect(
    () => {
      getWeather(location);
    },
    [location]
  );

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!
          <br />
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
