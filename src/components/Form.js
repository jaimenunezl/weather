import React, { useState } from "react";

function Form({ getWeather }) {
  const [search, updateSearch] = useState({ city: "", country: "" });

  const handleChange = e => {
    updateSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    getWeather(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={search.city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name="country" value={search.country}>
          <option value="">Select country</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
          <option value="CL">Chile</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="Search"
        />
      </div>
    </form>
  );
}

export default Form;
