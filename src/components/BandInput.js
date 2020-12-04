import React, { useState } from 'react';

const BandInput = ({ addBand }) => {
  const [bandName, setBandName] = useState("");

  const handleChange = e => setBandName(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!bandName || bandName === "Phish") {
      alert("Please enter a band name");
      return;
    }

    addBand(bandName);
    setBandName("");
  };

  return (
    <form className="band-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={bandName}
        placeholder="Enter a band"
      />
      <button type="submit">Add Band</button>
    </form>
  );
};

export default BandInput;
