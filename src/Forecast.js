import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div classsName="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="Forecast-temp">19°</span> 10°
          </div>
        </div>
      </div>
    </div>
  );
}
