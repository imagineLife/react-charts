import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import { stratify, treemap } from 'd3-hierarchy';

const useHierarchy = (data) => {
  function sumBySize(d) {
    return d.size;
  }

  //stratify data
  var stratRootData = stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent)(data);

  let hierarched = stratRootData
    .eachBefore((d) => {
      d.data.id = (d.parent ? `${d.parent.data.id}.` : '') + d.data.name;
      return d;
    })
    .sum(sumBySize)
    .sort((a, b) => b.height - a.height || b.value - a.value);

  treemap(hierarched);
  return [hierarched];
};

const Treemap = ({ width, height, margins, className, data }) => {
  const [hierachyData] = useHierarchy(data);
  console.log('TreeMap rendering');
  const thisThing = 'water';
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
