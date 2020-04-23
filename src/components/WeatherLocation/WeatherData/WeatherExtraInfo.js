import React from 'react';
import PropTypes from "prop-types";
import "./styles.css";

const WeatherExtraInfo = (props) => (
  <div className="weatherExtraInfoCont">
    <span className="extraInfoText">{`Humedad: ${props.humidity} % - `}</span>
    <span className="extraInfoText">{`Vientos: ${props.wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;