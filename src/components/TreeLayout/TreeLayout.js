import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import { stratify, tree, hierarchy } from 'd3-hierarchy';
import { schemeDark2 } from 'd3-scale-chromatic';
import { scaleOrdinal } from 'd3-scale';

const useHierarchy = (data) => {
  function sumBySize(d) {
    return d.size;
  }

  //stratify data
  const stratRootData = stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent)(data);

  const nodes = hierarchy(data, (d) => d.children);

  return [stratRootData, nodes];
};

const TreeLayout = ({ width, height, margins, className, data }) => {
  const [stratRootData, nodes] = useHierarchy(data);

  const colorScale = scaleOrdinal(schemeDark2);
  return (
    <svg className={`${className}-svg`} {...{ height, width }}>
      <g
        className="tree-layout-group"
        transform={`translate(${margins.l},${margins.t})`}
      >
        {!stratRootData ? null : <text>Here</text>}
      </g>
    </svg>
  );
};

export default TreeLayout;
