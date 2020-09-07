import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';

const ForceLayout = ({
  width,
  height,
  data,
  margins,
  type,
  className,
  barWidthPercentage
}) => {
  const { xDomain, yDomain, points } = data;

  let lineSize = {
    w: width - margins.l,
    h: height - margins.t
  };

  let thisScale = `scale${type}`;

  const xScale = dscl[thisScale]().domain(xDomain).range([0, lineSize.w]);

  const yScale = dscl
    .scaleLinear()
    .domain(yDomain)
    .range([height - margins.b, margins.t]);

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="bar-group"
          transform={`translate(${margins.l},${margins.t})`}
        ></g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default ForceLayout;
