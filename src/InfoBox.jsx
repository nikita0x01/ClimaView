import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1702658508504-f3ada15e98a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200";

  // Default (fallback) data if no info is provided
  const weatherInfo = info || {
    city: "Mumbai",
    feelsLike: 83.34,
    temp: 22.42,
    tempMin: 24.34,
    tempMax: 41.12,
    humidity: 43,
    weather: "Haze",
  };

  // Choose background image dynamically
  const imageUrl =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 20
      ? HOT_URL
      : COLD_URL;

  return (
    <div
      className="InfoBox"
      style={{
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          color: "#111",
          letterSpacing: "1px",
          fontSize: "2rem",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Weather Overview — {weatherInfo.weather}
      </h2>

      <div
        className="CardContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Card
          sx={{
            width: "90%",
            maxWidth: 600,
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "#fafafa",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Weather image"
            height="280"
            image={imageUrl}
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#1a1a1a",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {weatherInfo.city}
            </Typography>

            <Typography
              variant="body1"
              component={"span"}
              sx={{
                color: "#333",
                display: "block",
                fontSize: "17px",
                lineHeight: "1.8",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div>Temperature: {weatherInfo.temp}°C</div>
              <div>Humidity: {weatherInfo.humidity}%</div>
              <div>Min Temp: {weatherInfo.tempMin}°C</div>
              <div>Max Temp: {weatherInfo.tempMax}°C</div>
              <div>
                Weather Condition: <i>{weatherInfo.weather}</i>
              </div>
              <div>Feels Like: {weatherInfo.feelsLike}°C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
