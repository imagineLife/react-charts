import React, { useEffect, useRef } from 'react';
import './Card.scss';

// import gutterpadding
import sassVars from './../../float-grid.scss';
// Hook
import useDimensions from './../../Hooks/useDimensions';

const Card = ({ children, className }) => {
  // div will render without cardDimensions first
  const [cardRef, cardDimensions] = useDimensions();

  console.log('cardDimensions');
  console.log(cardDimensions);

  return (
    <div className={`card ${className}`} ref={cardRef}>
      {children && children}
      {!children && <p>empty card</p>}
    </div>
  );
};

export default Card;
