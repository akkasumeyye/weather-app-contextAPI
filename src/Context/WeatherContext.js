import axios from "axios";
import React, { createContext, useContext, useState , useEffect, useCallback , useMemo } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({ ready: false });
  const [location, setLocation] = useState("istanbul");
  const [lat, setLat] = useState(41.0351);
  const [lon, setLon] = useState(28.9833);
  
  const api_call = useCallback( async () => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b36651d81c662994fb027222b0885881&units=metric`;

        const req = axios.get(url);
        const res = await req;
        console.log(res);
        setWeather({
            ready : true,
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            minTemp: res.data.main.temp_min,
            maxTemp: res.data.main.temp_max,
            coordinates : res.data.coord,
            wind: res.data.wind.speed,
            date: new Date(res.data.dt * 1000),
            city: res.data.name,
            icon: res.data.weather[0].icon,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
  })
  setLocation(res.data.name)
  setLat(res.data.coord.lat)
  setLon(res.data.coord.lon)
  }, [location])
 
useEffect(() => {
  api_call()
}, [api_call]);

console.log(location)
console.log(weather)
  
  const contextValue =useMemo(() =>({
    api_call,
    weather,
    setWeather,
    location,
    setLocation,
    lat,
    lon,
   
  }),[location , weather , api_call , lat, lon ]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherProvider;
