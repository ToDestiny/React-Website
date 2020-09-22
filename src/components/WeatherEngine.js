import React, { useState, useEffect } from "react";

import WeatherCard from "components/WeatherCard/component";

const WeatherEngine = ({ location }) => {
  // Initialize state variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  // Defining the data fetching function
  const getWeather = async q => {
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
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
