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
  if (!width || !height) return <p></p>;
  const [visSize] = useState([width, height]);

  const stratifiedData = d3H.stratify()(data);
  const packLayout = d3H.pack().size(visSize);

  const rootNode = d3H.hierarchy(stratifiedData).sum((d) => d.data.size);

  const childNodes = rootNode.descendants();

  packLayout(rootNode);

  return (
    <ResponsiveWrapper dimensions={{ w: width, h: height }}>
      <svg className={`packed-bubble-svg`} {...{ height, width }}>
        <g className="bubble-group">
          {childNodes.map((d, idx) => (
            <circle
              key={`packed-circle-${idx}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              stroke="white"
              fill="#05668D"
              opacity={0.3}
              strokeWidth={'2px'}
            />
          ))}
        </g>
      </svg>
    </ResponsiveWrapper>
  );
};

export default PackedBubble;
