import React from 'react';
import Band from './Band'

const Bands = ({ bands, deleteBand }) => (
  <ul className="bands-list">
    {bands.length ? bands.map(band => (
      <Band
        key={band.uuid}
        deleteBand={deleteBand}
        {...band}
      />
    )) : (
      <p className="empty-prompt-text">There are no bands, submit one (as long as it isn't Phish).</p>
    )}
  </ul>
);

export default Bands;