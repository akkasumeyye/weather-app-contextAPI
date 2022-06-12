import React , {memo} from "react";
import { useWeatherContext } from '../../Context/WeatherContext';


/*FORMATTED CURRENT DATE DEPENDS ON DAY,HOURS,MINUTE*/


const FormattedDate = () => {
     
    const {weather} = useWeatherContext()

  if (weather.date) {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      let month = months[weather.date.getMonth()];
      let date = weather.date.getDate();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[weather.date.getDay()];
    let hours = weather.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = weather.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {date} {month} {hours}:{minutes}
      </div>
    );
  } else {
    return "loading";
  }
}
export default memo(FormattedDate);