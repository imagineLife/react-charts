import React, { forwardRef } from 'react';
import './ResponsiveWrapper.scss';

const ResponsiveWrapper = forwardRef(
  ({ className, boxTxt, dimensions, children }, ref) => {
    return (
      <div
        className={`box ${className}`}
        style={{ width: `${dimensions.w}px`, height: `${dimensions.h}px` }}
      >
        {children}
      </div>
    );
  }
);

export default ResponsiveWrapper;
