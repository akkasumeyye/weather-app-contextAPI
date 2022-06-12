import React, { useState, useEffect, useCallback } from "react";

import "./weatherforecast.css"
import codeMapping from '../icon/WeatherIcon';
import { useWeatherContext } from '../../Context/WeatherContext';

const WeatherForecast = () => {
  let [forecast, setForecast] = useState();
  let [loaded, setLoaded] = useState(false);

  const {lat , lon} = useWeatherContext();

/* GETTING WEATHER DATA FOR 7 DAYS AND PUT INSIDE setForecast STATE */


const getDatafor7days = useCallback(async () => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b36651d81c662994fb027222b0885881&units=metric`;
    try {
      const data = await fetch(url).then((res) => res.json());
      console.log("data", data);
      setLoaded(true);
      setForecast(data.daily);
    } catch (error) {
      console.log(error);
    }
  }, [lat,lon]);

  useEffect(() => {
    getDatafor7days();
  }, [getDatafor7days]);


  return (
    <div className="forecastContainer">
      {loaded ?
        forecast?.slice(1,7).map((item, index) => {

         /* INDICATE DAYS OF WEEK */
          const day = () => {
            let Day = new Date(item.dt * 1000).getDay();
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[Day];  
          };    
          /* visulation daily weather data of one week */
          return (
            <div key={index}>
               {/*DAYS OF ONE WEEK*/}
              <p id="day">{day()}</p>
              {/*WEATHER ICON*/}
              <img src={codeMapping[item.weather[0].icon]} alt="icon" />
              <br></br>
              <br></br>
               {/*MIN && MAX TEMPARATURE*/}
              <span>{Math.round(item.temp.max)}°</span>{" "}
              <span>{Math.round(item.temp.min)}°</span>
            </div>
          );
        }) : (<h1>Loading..</h1>)}
    </div>
  );
};

export default WeatherForecast;
