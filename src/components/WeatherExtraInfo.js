import React from 'react';

const WeatherExtraInfo = (props) => (
  <div>
    <span>{`${props.humidity} % - `}</span>
    <span>{`${props.wind} viento`}</span>
  </div>
);

export default WeatherExtraInfo;