import React, { useRef, useEffect, useState } from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as d3F from 'd3-force';
import * as d3S from 'd3-selection';

const ForceLayout = ({
  width,
  height,
  data,
  margins,
  type,
  className,
  barWidthPercentage
}) => {
  const [sim] = useState(d3F.forceSimulation());
  const [forceYVal, setForceYVal] = useState(0.2);
  console.log('forceYVal');
  console.log(forceYVal);

  const [forceProperties] = useState({
    center: {
      x: 0.5,
      y: 0.5
    },
    charge: {
      enabled: true,
      strength: -30,
      distanceMin: 1,
      distanceMax: Math.min(width * 0.35, height * 0.35)
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
      y: forceYVal
    },
    link: {
      enabled: true,
      distance: 30,
      iterations: 1
    }
  });

  const gRef = useRef();
  const { nodes, links } = data;

  // restarts the sim (important if sim has already slowed down)
  // useEffect(() => {
  //   sim.alpha(1).restart();
  // }, [forceYVal]);

  useEffect(() => {
    const gElm = gRef.current;

    const { collide, center, charge, forceX, forceY, link } = forceProperties;

    let forceNodes = d3S
      .select(gElm)
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', collide.radius)
      .attr('stroke', charge.strength > 0 ? 'blue' : 'red')
      .attr(
        'stroke-width',
        charge.enabled == false ? 0 : Math.abs(charge.strength) / 15
      );

    sim.nodes(nodes);

    sim
      .force('link', d3F.forceLink())
      .force('charge', d3F.forceManyBody())
      .force('collide', d3F.forceCollide())
      .force('center', d3F.forceCenter())
      .force('forceX', d3F.forceX())
      .force('forceY', d3F.forceY());

    //apply more props to simulations
    sim
      .force('center')
      .x(width * center.x)
      .y(height * 0.8 * center.y);
    sim
      .force('charge')
      .strength(charge.strength * charge.enabled)
      .distanceMin(charge.distanceMin)
      .distanceMax(charge.distanceMax);
    sim
      .force('collide')
      .strength(collide.strength * collide.enabled)
      .radius(collide.radius)
      .iterations(collide.iterations);
    sim
      .force('forceX')
      .strength(forceX.strength * forceX.enabled)
      .x(width * forceX.x);
    sim
      .force('forceY')
      .strength(forceY.strength) // * forceY.enabled
      .y(height * 0.8 * forceYVal);
    sim
      .force('link')
      .id(function (d) {
        return d.id;
      })
      .distance(link.distance)
      .iterations(link.iterations)
      .links(link.enabled ? links : []);

    // runs node/link updates on simulation-tick
    sim.on('tick', () => {
      forceNodes
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
    });
  });

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <button onClick={() => setForceYVal(0.95)}>Update</button>
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
