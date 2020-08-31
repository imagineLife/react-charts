import React, { useEffect, useRef, useState } from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';
import * as d3Arr from 'd3-array';
import * as d3F from 'd3-force';
import * as d3ft from 'd3-format';
import { schemeDark2 } from 'd3-scale-chromatic';
import * as d3S from 'd3-selection';
import * as d3H from 'd3-hierarchy';
import 'd3-selection-multi';

const PackedBubble = ({ width, height, data, margins, type, className }) => {
  console.log('packed data');
  console.log(data);

  // const circleGWrapper = useRef();
  // const smallerDimension = Math.min(width, height);

  // const radiusScale = dscl
  //   .scaleSqrt()
  //   .domain(
  //     d3Arr.extent(data, (d) => {
  //       return +d.sales;
  //     })
  //   )
  //   .range([0, smallerDimension / 4]);

  // const colorScale = dscl.scaleOrdinal(schemeDark2);

  // let myTickFn = () => {
  //   console.log('tick!');
  //   d3S
  //     .select(circleGWrapper.current)
  //     .selectAll('circle')
  //     .data(data)
  //     .attr('cx', (d) => d.x)
  //     .attr('cy', (d) => d.y);
  // };

  // useEffect(() => {
  //   if (circleGWrapper && circleGWrapper.current) {
  //     let simulation = d3F
  //       .forceSimulation()
  //       .force('yforce', d3F.forceY().strength(0.03))
  //       .force('xforce', d3F.forceX().strength(0.03))
  //       .force(
  //         'myCollide',
  //         d3F.forceCollide((d) => radiusScale(d.sales))
  //       )
  //       .nodes(data)
  //       .on('tick', myTickFn);
  //   }
  // }, []);
  const [diameter] = useState(500);
  const format = d3ft.format(',d');
  const [dataSource] = useState(2);
  var pack = d3H.pack().size([diameter - 4, diameter - 4]);
  // .value(function (d) {
  //   return d.size;
  // });

  // var svg = d3
  //   .select('body')
  //   .append('svg')
  //   .attr('width', diameter)
  //   .attr('height', diameter);

  // var buttonData = ['Original', 'Constant', 'Random'];

  // var buttonDiv = d3
  //   .select('body')
  //   .append('svg')
  //   .attr('width', diameter)
  //   .attr('height', 50);

  // var buttons = buttonDiv
  //   .selectAll('.updateButton')
  //   .data(buttonData)
  //   .enter()
  //   .append('g')
  //   .attr('class', 'updateButton')
  //   .on('click', function (d, i) {
  //     dataSource = i;
  //     updateVis();
  //   });

  // buttons
  //   .append('rect')
  //   .attr('x', function (d, i) {
  //     return i * 100 + 100;
  //   })
  //   .attr('width', 98)
  //   .attr('height', 25)
  //   .attr('ry', 5)
  //   .style('stroke', '#787878')
  //   .style('fill', 'tan');
  // buttons
  //   .append('text')
  //   .attr('x', function (d, i) {
  //     return i * 100 + 100 / 2 + 98;
  //   })
  //   .attr('y', 12)
  //   .attr('dy', '0.35em')
  //   .style('text-anchor', 'middle')
  //   .style('font-size', '15px')
  //   .text(function (d) {
  //     return d;
  //   });

  // var circles = vis
  //   .append('circle')
  //   .attr('stroke', 'black')
  //   .style('fill', function (d) {
  //     return !d.children ? 'tan' : 'beige';
  //   })
  //   .attr('cx', function (d) {
  //     return d.x;
  //   })
  //   .attr('cy', function (d) {
  //     return d.y;
  //   })
  //   .attr('r', function (d) {
  //     return d.r;
  //   });

  // updateVis();

  // function updateVis() {
  //   if (dataSource == 0)
  //     pack.value(function (d) {
  //       return d.size;
  //     });
  //   if (dataSource == 1)
  //     pack.value(function (d) {
  //       return 100;
  //     });
  //   if (dataSource == 2)
  //     pack.value(function (d) {
  //       return 1 + Math.floor(Math.random() * 301);
  //     });

  //   var data1 = pack.nodes(data);

  //   titles
  //     .attr('x', function (d) {
  //       return d.x;
  //     })
  //     .attr('y', function (d) {
  //       return d.y;
  //     })
  //     .text(function (d) {
  //       return d.name + (d.children ? '' : ': ' + format(d.value));
  //     });

  //   circles
  //     .transition()
  //     .duration(5000)
  //     .attr('cx', function (d) {
  //       return d.x;
  //     })
  //     .attr('cy', function (d) {
  //       return d.y;
  //     })
  //     .attr('r', function (d) {
  //       return d.r;
  //     });
  // }

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`${className}-svg`} {...{ height, width }}>
        <g
          className="packed-bubble-group"
          transform={`translate(${width / 2},${height / 2})`}
        ></g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default PackedBubble;
