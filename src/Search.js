import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherNew from "./WeatherNew";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setCity] = useState(props.cityDefault);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    let apiKey = "eaf040dff7892fc80bc32a2d99e6ebec";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchform" onSubmit={handleSubmit} action="">
      <input
        className="enter"
        id="search-city"
        type="search"
        onChange={updateCity}
        placeholder="Type a city..."
        autoComplete="off"
      />
      <input className="enter-button" type="submit" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <br />
        <WeatherNew data={weather} />
        <div className="card weatherDisplay">
          <div className="card-body forecast-card">
            <div className="forecast-display" id="forecast-display"></div>
            <Forecast coordinates={weather.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
