import React, { useEffect, useRef, cloneElement } from 'react';
import './Card.scss';

// import gutterpadding
import sassVars from './../../float-grid.scss';

// Hook
import useDimensions from './../../Hooks/useDimensions';

// calc dimensional info from sass vars
const gp = parseFloat(sassVars['gutter-padding'].replace('%', '')) / 100;
const gutter = parseInt(sassVars.gutter.replace('px', ''));

const Card = ({ children, className, parentSize }) => {
  // div will render without cardDimensions first
  const [cardRef, cardDimensions] = useDimensions();

  /*
    - pull gutter-width % from sass file
    - apply gutter-width to cardDimensions fn result
  */

  const parentWidthLessGutters =
    parentSize && parentSize.width && parentSize.width;

  const appliedGutter = parentWidthLessGutters * gp || null;
  const twoGutters = appliedGutter * 2;

  let widthLessGutter = cardDimensions.width - twoGutters;

  return (
    <div className={`card ${className}`} ref={cardRef}>
      {children &&
        cloneElement(children, {
          height: cardDimensions.height,
          width: widthLessGutter || cardDimensions.width
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
