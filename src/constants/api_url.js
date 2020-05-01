const LOCATION = "Cartagena,co";
const API_KEY = "f99bbd9e4959b513e9bd0d7f7356b38d";
const URL_BASE_WEATHER = "https://api.openweathermap.org/data/2.5/weather";

export const API_WEATHER = `${URL_BASE_WEATHER}?q=${LOCATION}&appid=${API_KEY}`;

