import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForeastDay">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} color={"grey"} />
      <div>
        <span className="Forecast-temp">
          {Math.round(props.data.temp.max)}°
        </span>
        <span>{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
