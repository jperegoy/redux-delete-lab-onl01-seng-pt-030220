import React from 'react';

const Band = ({ deleteBand, id, name }) => {
  const handleOnClick = id => deleteBand(id);

  return (
    <li className="band">
      <h4>{name}</h4>
      <button onClick={() => handleOnClick(id)}>&times;</button>
    </li>
  );
};

export default Band;
