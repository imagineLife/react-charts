import React, { useRef, useEffect } from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';
import * as d3F from 'd3-force';

const ForceLayout = ({
  width,
  height,
  data,
  margins,
  type,
  className,
  barWidthPercentage
}) => {
  const forceProperties = {
    center: {
      x: 0.5,
      y: 0.5
    },
    charge: {
      enabled: true,
      strength: -30,
      distanceMin: 1,
      distanceMax: 2000
    },
    collide: {
      enabled: true,
      strength: 0.7,
      iterations: 1,
      radius: 5
    },
    forceX: {
      enabled: false,
      strength: 0.1,
      x: 0.5
    },
    forceY: {
      enabled: false,
      strength: 0.1,
      y: 0.5
    },
    link: {
      enabled: true,
      distance: 30,
      iterations: 1
    }
  };
  const gRef = useRef();
  const { nodes, link } = data;

  useEffect(() => {
    console.log('gRef');
    console.log(gRef.current);

    console.log('inside effect!');
  });

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="bar-group"
          transform={`translate(${margins.l},${margins.t})`}
          ref={gRef}
        ></g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default ForceLayout;
