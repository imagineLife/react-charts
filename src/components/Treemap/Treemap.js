import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';

const Treemap = ({ width, height, margins, className, data }) => {
  return (
    <svg className={`${className}-svg`} {...{ height, width }}>
      <g
        className="line-group"
        transform={`translate(${margins.l},${margins.t})`}
      >
        <text>test</text>
      </g>
    </svg>
  );
};

export default Treemap;
