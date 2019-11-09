import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === "" || country === "") return;

    const getDataFromAPI = async () => {
      const token = "2a0ef77f53d9f05188a5b6d4bd8e7cf7";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${token}`;
      try {
        const response = await axios(url);
        setResult(response.data);
      } catch (e) {
        setResult({ code: 404 });
      }
    };

    getDataFromAPI();
  }, [city, country]);

  const getWeather = data => {
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  let component;

  if (error) {
    component = <Error message="All fields are required" />;
  } else if (result.code === 404) {
    component = <Error message="City not found" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <div className="App">
      <Header title="Weather" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form getWeather={getWeather} />
            </div>
            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
