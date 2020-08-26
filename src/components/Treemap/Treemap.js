import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import { stratify, treemap, treemapResquarify } from 'd3-hierarchy';

const useHierarchy = (data, w, h) => {
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

  var treemapify = treemap()
    .tile(treemapResquarify)
    .size([w, h])
    .round(true)
    .paddingInner(1);

  const treeData = treemapify(hierarched).leaves();

  return [treeData];
};

const Treemap = ({ width, height, margins, className, data }) => {
  const [hierachyData] = useHierarchy(data, width, height);
  console.log('hierachyData');
  console.log(hierachyData);
  console.log('// - - - - - //');

  return (
    <svg className={`${className}-svg`} {...{ height, width }}>
      <g
        className="treemap-group"
        transform={`translate(${margins.l},${margins.t})`}
      >
        {!hierachyData
          ? null
          : hierachyData.map((itm, itmIdx) => (
              <g key={`block-${itmIdx}`} className="treemap-block">
                <rect
                  id={itm.data.id}
                  width={itm.x1 - itm.x0}
                  height={itm.y1 - itm.y0}
                  fill={'orange'}
                />
              </g>
            ))}
      </g>
    </svg>
  );
};

export default Treemap;
