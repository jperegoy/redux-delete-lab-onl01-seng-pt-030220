import React from 'react';

const Band = ({ deleteBand, name, uuid }) => {
  const handleOnClick = id => deleteBand(id);

  return (
    <li className="band">
      <h4>{name}</h4>
      <button onClick={() => handleOnClick(uuid)}>&times;</button>
    </li>
  );
};

export default Band;
