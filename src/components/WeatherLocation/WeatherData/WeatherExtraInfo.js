import React from 'react';
import PropTypes from "prop-types";

const WeatherExtraInfo = (props) => (
  <div>
    <span>{`${props.humidity} % - `}</span>
    <span>{`${props.wind} viento`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;