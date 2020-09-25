import React from "react";

import WeatherEngine from "components/WeatherEngine";
import ResponsiveDrawer from "components/MenuBar/ResponsiveDrawer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <WeatherEngine location="Paris,fr" />
      <WeatherEngine location="Tokyo,jp" />
      <WeatherEngine location="San Francisco,us" />
      <WeatherEngine location="Sydney,au" />
    </div>
  );
}

export default App;
