import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import { stratify, tree, hierarchy } from 'd3-hierarchy';
import { schemeDark2 } from 'd3-scale-chromatic';
import { scaleOrdinal } from 'd3-scale';
import { linkHorizontal } from 'd3-shape';
import './TreeLayout.css';

const useHierarchy = (data) => {
  function sumBySize(d) {
    return d.size;
  }

  //stratify data
  const stratRootData = stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent)(data);

  const nodes = hierarchy(data, (d) => d.children);
  return [stratRootData, stratRootData.descendants()];
};

const TreeLayout = ({ width, height, margins, className, data }) => {
  const [stratRootData, nodes] = useHierarchy(data);
  const treeIt = tree().size([height * 0.8, width * 0.7]);
  const treeifiedData = treeIt(stratRootData);
  if (!width || !height) return <p></p>;

  return (
    <svg className={`tree-layout-svg`} {...{ height, width }}>
      <g
        className="tree-layout-g-wrapper"
        transform={`translate(${margins.l + 25}, ${margins.t})`}
      >
        {!treeifiedData
          ? null
          : treeifiedData.descendants().map((d, idx) => (
              <g
                key={`dot-node-${idx}`}
                className="tree-layout-group"
                transform={`translate(${d.y},${d.x})`}
              >
                <circle r={2.5} />
                <text
                  dy={3}
                  x={d.children ? -8 : 8}
                  y={d.children && d.parent !== null ? -8 : 0}
                  textAnchor={d.children ? 'end' : 'start'}
                >
                  {d.id}
                </text>
              </g>
            ))}
        {!treeifiedData
          ? null
          : treeifiedData.links().map((d, idx) => (
              <path
                key={`tree-layout-link-${idx}`}
                className={`link`}
                d={linkHorizontal()
                  .x((d) => d.y)
                  .y((d) => d.x)(d)}
              ></path>
            ))}
      </g>
    </svg>
  );
};

export default TreeLayout;
