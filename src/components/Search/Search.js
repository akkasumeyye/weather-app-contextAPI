import React, { useState} from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useWeatherContext} from '../../Context/WeatherContext';
import FormattedDate from '../icon/FormattedDate';



const Search = () => {
  const [SearchedCity, setSearchedCity] = useState(" ");
  const {location,setLocation} = useWeatherContext();
  
const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(SearchedCity)
  };
  
  return (
      <div className="search-city">
           {/*SHOWING CITY NAME AND ITS CURRENT DATE WHİCH IS FORMATTED*/}
        <div className="cityName">
          <h1>{location}</h1>
            <FormattedDate/>
        </div>
        <div>
           {/*FORM OF SEARCHED CITY BY SOMEONE */}
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search city here"
              value={SearchedCity}
              onChange={(e) => { 
              setSearchedCity(e.target.value)
            }
          }    
            />
            <button type="submit">
              <FaSearch/>
            </button>
          </form>
        </div>
      </div>
  );
};

export default Search;
