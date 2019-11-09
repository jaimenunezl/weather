import React from "react";

function Weather({ result }) {
  const { name, main } = result;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name} is</h2>
        <p className="temperatura">
          {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
        </p>
        <p>Max.: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
        <p>Min.: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
      </div>
    </div>
  );
}

export default Weather;
