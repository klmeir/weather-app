import React from "react";
import WeatherIcons from "react-weathericons";

const icons = {
  sunny: "day-sunny",
  fog: "day-fog",
};

const getWeathericon = (weatherState) => {
  const icon = icons[weatherState];
  if
    (icon) return <WeatherIcons name={icon} size="2x" />;
  else
    return <WeatherIcons name="day-sunny" size="2x" />;
};

const WeatherTemperature = (props) => (
  <div>
    {getWeathericon(props.weatherState)}
    <span>{`${props.temperature} C°`}</span>
  </div>
);

export default WeatherTemperature;
