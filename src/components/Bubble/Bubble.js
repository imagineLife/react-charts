import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';

const Bubble = ({ width, height, data, margins, type, className }) => {
  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="bubble-group"
          transform={`translate(${margins.l},${margins.t})`}
        ></g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default Bubble;
