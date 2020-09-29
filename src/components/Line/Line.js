import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';

const Line = ({ width, height, data, margins, type, className }) => {
  if (!width && !height) return <p></p>;
  const { xDomain, yDomain, points } = data;

  let lineSize = {
    w: width - margins.l,
    h: height - margins.t
  };

  const scaledX = (d) => xScale(d.x);
  const scaledY = (d) => yScale(d.y);

  let thisScale = `scale${type}`;

  const xScale = dscl[thisScale]().domain(xDomain).range([0, lineSize.w]);

  const yScale = dscl
    .scaleLinear()
    .domain(yDomain)
    .range([height - margins.b, margins.t]);

  let thisLine = dsh.line().x(scaledX).y(scaledY);

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }} className="col-1">
      <svg className={`line-svg`} {...{ height, width }}>
        <g
          className="line-group"
          transform={`translate(${margins.l},${margins.t})`}
        >
          <path
            fill="none"
            stroke="steelblue"
            strokeWidth={3}
            d={thisLine(points)}
          />
        </g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default Line;
