import React from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
});

const BandsContainer = ({ addBand, bands, deleteBand }) => (
  <section className="bands-container">
    <BandInput addBand={addBand} bands={bands} />
    <Bands bands={bands} deleteBand={deleteBand} />
  </section>
);

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
