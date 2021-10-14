import React from 'react';

const Bomb = () => (
  <svg className="bomb" viewBox="0 0 80 80" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse strokeWidth="1" stroke="#000" fill="#000" rx="20" ry="20" cx="40" cy="40"/>
      <line stroke="#000" strokeWidth="6" fill="#000" x1="40" x2="40" y1="16" y2="64"/>
      <line stroke="#000" strokeWidth="6" fill="#000" x1="40" x2="40" y1="16" y2="64" transform="rotate(90 40 40)"/>
      <line stroke="#000" strokeWidth="6" fill="#000" x1="40" x2="40" y1="16" y2="64" transform="rotate(45 40 40)"/>
      <line stroke="#000" strokeWidth="6" fill="#000" x1="40" x2="40" y1="16" y2="64" transform="rotate(-45 40 40)"/>
      <rect stroke="#fff" strokeWidth="0" fill="#fff" height="8" width="8" y="30" x="30"/>
    </g>
  </svg>
);

export default Bomb;