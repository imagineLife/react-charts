import React, { Fragment } from 'react';

// data
import lineData from './../../data/line.json';
import treeMapData from './../../data/treeMap.json';
import bubbleData from './../../data/MockBubble.json';
import packedBubbleData from './../../data/PackData.json';
import barData from './../../data/barData.json';

// Components
import Line from './../../components/Line';
import Treemap from './../../components/Treemap';
import Bubble from './../../components/Bubble';
import PackedBubble from './../../components/PackedBubble';
import TreeLayout from './../../components/TreeLayout';
import Bar from './../../components/Bar';

const Charts = () => {
  const dims = {
    width: 450,
    height: 250,
    margins: { t: 10, l: 10, b: 10 }
  };

  const lineProps = {
    className: 'thisLine',
    data: lineData,
    type: 'Band',
    ...dims
  };

  const treeMapProps = {
    className: 'treeMap',
    data: treeMapData,
    ...dims
  };

  const barProps = {
    className: 'this-one',
    data: barData,
    type: 'Band',
    barWidthPercentage: 0.5,
    ...dims
  };

  return (
    <Fragment>
      <Line {...lineProps} />
      <Treemap {...treeMapProps} />
      <Bubble {...treeMapProps} data={bubbleData} />
      <PackedBubble {...treeMapProps} data={packedBubbleData} />
      <TreeLayout {...treeMapProps} />
      <Bar {...barProps} />
    </Fragment>
  );
};

export default Charts;
