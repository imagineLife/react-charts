import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';

const Bar = ({
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
        >
          {data.points.map((d, idx) => {
            // calc bar props
            const barProps = {
              width: !barWidthPercentage
                ? xScale.bandwidth()
                : xScale.bandwidth() * barWidthPercentage,
              height: yScale(0) - yScale(d.y),
              y: yScale(d.y),
              fill: 'lightgray',
              x: !barWidthPercentage
                ? xScale(d.x)
                : xScale(d.x) + xScale.bandwidth() * (barWidthPercentage / 2)
            };
            return <rect key={`rect-${d.x}-${idx}`} {...barProps} />;
          })}
        </g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default Bar;
