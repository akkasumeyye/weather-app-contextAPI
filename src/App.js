import "./App.css";
import { useState } from "react";
import Search from "./components/Search/Search";
import WeatherProvider from "./Context/WeatherContext";
import WeatherBody from './components/WeatherBody/WeatherBody';
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";


function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  const themeChange = () => {
    setChangeTheme(!changeTheme);
  };
  return (
    <WeatherProvider>
      <div className="App">
        <div className="outerdiv">
          <div className={changeTheme ? "weatherapp-dark" : "weatherapp"}>
            <div className="searchContainer">
              <Search />
            <div className="toggle">
              <label className="switch">
                <input type="checkbox" onChange={themeChange}></input>
                <span className="slider round"></span>
              </label>
            </div>
            </div>
            <div className="weatherBodyDiv">
              <WeatherBody />
            </div>
            <div className="weatherForecast">
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
