import React from 'react';
import Bomb from './Bomb';
import '../styles/Remaining.css';

const Remaining = ({bombs, flagged, outcome}) => (
  <div className="remaining"><Bomb/>: {outcome === 'win' ? 0 : bombs - flagged}</div>
);

export default Remaining;