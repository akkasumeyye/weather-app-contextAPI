import React from "react";
import "./weatherbody.css";
import { useWeatherContext } from "../../Context/WeatherContext";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import codeMapping from "../icon/WeatherIcon";

const WeatherBody = () => {
  const { weather } = useWeatherContext();
/* CURRENT DATA VISULATİON */
  return (
    <div className="weatherBodyContainer">
      {weather.ready ? ( 
        <>
      <div className="weatherBody">
        <ul id="temp">
          <li>
             {/*TEMPERATURE*/}
            <div className="weatherCelcius">
              {Math.round(weather.temp)}
              <span id="celcius">°C</span>
            </div>
            </li>
             {/*WEATHER DESCRIPTION*/}
            <li id="desc">
              {weather.descp}
            </li>
             {/*WEATHER ICON*/}
          <li id="icon">
            <img src={codeMapping[weather.icon]} alt="icon"></img>          
          </li>
        </ul>
      </div>
      <div>&nbsp;</div>
        <div className="weatherDesc">
           {/*HUMIDITY*/}
          <p>
            <WiHumidity />
            {weather.humidity}%
          </p>
           {/*WIND*/}
          <p>
            {" "}
            <FaWind /> {weather.wind} km/h
          </p>
        </div>
        </>
      ) : (<p>Loading..</p>)}
    </div>
  );
};

export default WeatherBody;
