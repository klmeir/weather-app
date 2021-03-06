import convert from "convert-units";
import { CLOUDY } from "./../constants/weathers";

const getTemp = (kelvin) => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
};

const getWeatherState = (weather_data) => {
  //weather_data.weather.main;
  return CLOUDY;
};

const transformWeather = (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const temperature = getTemp(temp);

  const DATA = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };

  return DATA;
};

export default transformWeather;