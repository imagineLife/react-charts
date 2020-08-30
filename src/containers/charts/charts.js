import React, { Fragment } from 'react';

// data
import lineData from './../../data/line.json';
import treeMapData from './../../data/treeMap.json';
import bubbleData from './../../data/MockBubble.json';

// Components
import Line from './../../components/Line';
import Treemap from './../../components/Treemap';
import Bubble from './../../components/Bubble';
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

  return (
    <Fragment>
      <Line {...lineProps} />
      <Treemap {...treeMapProps} />
      <Bubble {...treeMapProps} />
    </Fragment>
  );
};

export default Charts;
