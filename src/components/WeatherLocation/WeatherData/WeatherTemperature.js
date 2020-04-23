import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../../../constants/weathers";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
};

const getWeathericon = (weatherState) => {
  const icon = icons[weatherState];

  const sizeicon = "4x";

  if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeicon} />;
  else
    return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeicon} />;
};

const WeatherTemperature = (props) => (
  <div className="weatherTemperatureCont">
    {getWeathericon(props.weatherState)}
    <span className="temperature">{`${props.temperature}`}</span>
    <span className="temperatureType">{` C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
