import React, { Component } from "react";
import transformWeather from "./../../services/transformWeather";
import { API_WEATHER } from "./../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() { 
    super();
    this.state = {
      city: "Cartagena",
      data: null,
    }
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  

  handleUpdateClick = () => { 
    fetch(API_WEATHER)
      .then((resolve) => {
        console.log(resolve);
        return resolve.json();
      })
      .then((data) => {
        console.log("handleUpdateClick");
        const newWeather = transformWeather(data);               
        this.setState({
          data: newWeather,
        });
      });    
  }

  render() { 
    console.log("render");
    const { city, data } = this.state; 

    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : "Cargando..."}
      </div>
    );
  }  
}

export default WeatherLocation;
