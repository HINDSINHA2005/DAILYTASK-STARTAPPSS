import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "1e49d73b8bf14716bfd73623262201";

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      const data = await res.json();

      
      if (data.error) {
        throw new Error(data.error.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🌦️ Weather App</h2>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && (
        <div>
          <h3>{weather.location.name}</h3>
          <p>🌡️ Temp: {weather.current.temp_c}°C</p>
          <p>☁️ Weather: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
