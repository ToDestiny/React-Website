import React from "react";

import WeatherCard from "components/WeatherCard/component";
import ResponsiveDrawer from "components/MenuBar/ResponsiveDrawer";
import "./App.css";

function App() {
  /* const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=b9cc2647ff2f920e969cd8ea1e1b1379"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(res => {
    console.log("Feels like is " + res.main.feels_like);
    console.log(">Temp is " + res.main.temp);
  }); */
  return (
    <div className="App">
      <ResponsiveDrawer />
      <WeatherCard temp={-10} condition="Drizzy" city="Paris" country="FR" />
      <WeatherCard temp={20} condition="Rain" city="Melbourne" country="AU" />
      <WeatherCard temp={40} condition="Tornado" city="London" country="GB" />
    </div>
  );
}

export default App;
