import React, { useEffect, useRef, cloneElement } from 'react';
import './Card.scss';

// import gutterpadding
import sassVars from './../../float-grid.scss';
// Hook
import useDimensions from './../../Hooks/useDimensions';

const Card = ({ children, className }) => {
  // div will render without cardDimensions first
  const [cardRef, cardDimensions] = useDimensions();

  return (
    <div className={`card ${className}`} ref={cardRef}>
      {children &&
        cloneElement(children, {
          height: cardDimensions.height,
          width: cardDimensions.width
        })}
      {!children &&
        cardDimensions &&
        cardDimensions.width &&
        cardDimensions.height && (
          <p>{`W:${cardDimensions.width} H:${cardDimensions.height}`}</p>
        )}
    </div>
  );
};

export default Card;
