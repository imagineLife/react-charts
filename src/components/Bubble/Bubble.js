import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';
import * as d3Arr from 'd3-array';
import { schemeDark2 } from 'd3-scale-chromatic';

const Bubble = ({ width, height, data, margins, type, className }) => {
  console.log('data');
  console.log(data);

  const smallerDimension = Math.min(width, height);

  const radiusScale = dscl
    .scaleSqrt()
    .domain(
      d3Arr.extent(data, (d) => {
        return +d.sales;
      })
    )
    .range([0, smallerDimension / 4]);

  const colorScale = dscl.scaleOrdinal(schemeDark2);

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="bubble-group"
          transform={`translate(${width / 2},${height / 2})`}
        >
          {data.map((d, idx) => {
            const circleR = radiusScale(d.sales);
            console.log('circleR');
            console.log(circleR);
            return (
              <circle
                key={`bubble-chart-circle-${idx}`}
                className={`artist-circle ${d.name}`}
                r={circleR}
                fill={colorScale(d.sales)}
              />
            );
          })}
        </g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default Bubble;
