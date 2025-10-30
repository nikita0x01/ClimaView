import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_KEY = "984a8308e9c16fd5f7ed58ec6e240e99";

  // Fetch weather info from API
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      // clean and simplified data object
      const result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      console.log("Clean Weather Result:", result);
      return result;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found. Please try again.");
    }
  };

  // Handle input change
  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // Handle form submit
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newinfo = await getWeatherInfo();
    if (newinfo) updateInfo(newinfo); // update parent only if valid
    setCity("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
    


      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
       <TextField
  id="city"
  label="Enter City Name"
  variant="outlined"
  required
  value={city}
  onChange={handleChange}
  InputProps={{
    style: {
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      fontSize: "16px",
      fontFamily: "'Poppins', sans-serif",
      color: "#222",
      padding: "10px 12px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease-in-out",
    },
  }}
  InputLabelProps={{
    style: {
      color: "#555",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  }}
  sx={{
    width: "320px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#888",
      },
      "&:hover fieldset": {
        borderColor: "#222",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1a1a1a",
        boxShadow: "0 0 8px rgba(0,0,0,0.2)",
      },
    },
  }}
/>

       <Button
  variant="contained"
  type="submit"
  style={{
    width: "180px",
    fontWeight: "700",
    fontSize: "18px",
    letterSpacing: "1px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    borderRadius: "10px",
    padding: "12px 18px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
  onMouseOut={(e) => (e.target.style.backgroundColor = "#1a1a1a")}
>
  Search
</Button>

         
      </form>
    </div>
  );
}
