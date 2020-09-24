import React from 'react';
import './Card.css';

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children && children}
    {!children && <p>empty card</p>}
  </div>
);

export default Card;
