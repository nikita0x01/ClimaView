import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelslike: 83.34,
    temp: 22.42,
    tempMin: 24.34,
    tempMax: 41.12,
    humidity: 43,
    weather: "Haze",
  });

  const updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div className="weather-app">
      <h1
  style={{
    textAlign: "center",
    color: "#0d0d0d",
    fontSize: "42px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "10px",
    textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  ClimaView
</h1>

<p
  style={{
    textAlign: "center",
    color: "#333",
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto 25px",
    lineHeight: "1.6",
    fontFamily: "'Inter', sans-serif",
  }}
>
  ClimaView brings you real-time weather updates from around the world fast, clear, and reliable. 
  Our goal is to help you plan your day better by providing accurate temperature, humidity, and forecast insights at a glance.
</p>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
