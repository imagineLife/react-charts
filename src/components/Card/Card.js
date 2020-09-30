import React, { useEffect, useRef, cloneElement } from 'react';
import './Card.scss';

// import gutterpadding
import sassVars from './../../float-grid.scss';

// Hook
import useDimensions from './../../Hooks/useDimensions';
console.log('sassVars');
console.log(sassVars);
const gp = parseFloat(sassVars['gutter-padding'].replace('%', '')) / 100;
const gutter = parseInt(sassVars.gutter.replace('px', ''));
console.log('gutter');
console.log(gutter);

const Card = ({ children, className, parentSize }) => {
  // div will render without cardDimensions first
  const [cardRef, cardDimensions] = useDimensions();

  /*
    - pull gutter-width % from sass file
    - apply gutter-width to cardDimensions fn result
  */
  console.log('gp');
  console.log(gp);
  const parentWidthLessGutters =
    parentSize && parentSize.width && parentSize.width;
  console.log('parentWidthLessGutters');
  console.log(parentWidthLessGutters);

  let appliedGutter = parentWidthLessGutters * gp || null;
  console.log('parentWidthLessGutters');
  console.log(parentWidthLessGutters);

  console.log('appliedGutter');
  console.log(appliedGutter);

  let widthLessGutter = cardDimensions.width - appliedGutter;
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
