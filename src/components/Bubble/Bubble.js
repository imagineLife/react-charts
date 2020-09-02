import React, { useEffect, useRef } from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';
import * as d3Arr from 'd3-array';
import * as d3F from 'd3-force';
import { schemeDark2 } from 'd3-scale-chromatic';
import * as d3S from 'd3-selection';
import 'd3-selection-multi';

const Bubble = ({ width, height, data, margins, type, className }) => {
  const circleGWrapper = useRef();
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

  let myTickFn = () => {
    d3S
      .select(circleGWrapper.current)
      .selectAll('circle')
      .data(data)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);
  };

  useEffect(() => {
    if (circleGWrapper && circleGWrapper.current) {
      let simulation = d3F
        .forceSimulation()
        .force('yforce', d3F.forceY().strength(0.03))
        .force('xforce', d3F.forceX().strength(0.03))
        .force(
          'myCollide',
          d3F.forceCollide((d) => radiusScale(d.sales))
        )
        .nodes(data)
        .on('tick', myTickFn);
    }
  }, []);

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="bubble-group"
          transform={`translate(${width / 2},${height / 2})`}
          ref={circleGWrapper}
        >
          {data.map((d, idx) => {
            const circleR = radiusScale(d.sales);
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
