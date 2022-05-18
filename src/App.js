import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const APIKEY = "2bd8305b97669497039cef44560b9ba6";
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    );
    const data = await api_call.json();
    setWeather(data);
  };

  return (
    <>
      <div className={
            (typeof weather.main != "undefined") ?
            (weather.weather[0].main === "Clouds" || "Rain") ? "App-clouds" : "App-warm" 
              : "App"
          }>
        <div
          
        >
          <div className="container">
            <h1>Weather City App</h1>
          <input
          className="input"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <div>
          <button className="btn" onClick={getWeather}>Search</button>
          </div>
          {typeof weather.main === "undefined" ? (
            <div></div>
          ) : (
            <div>
              <p>
                {weather.name}, {weather.sys.country}
              </p>
              <p>{Math.round(weather.main.temp)}°C</p>
              <p>{weather.weather[0].main}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
