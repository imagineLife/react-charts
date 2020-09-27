import React, { Fragment } from 'react';

//css
import './../../float-grid.scss';
import './widgets.css';

// data
import lineData from './../../data/line.json';
import treeMapData from './../../data/treeMap.json';
import bubbleData from './../../data/MockBubble.json';
import packedBubbleData from './../../data/PackData.json';
import barData from './../../data/barData.json';
import forceLayoutData from './../../data/ForceLayout.json';

// Components
import Row from './../../components/Row';
import Card from './../../components/Card';
import Line from './../../components/Line';
import Treemap from './../../components/Treemap';
import Bubble from './../../components/Bubble';
import PackedBubble from './../../components/PackedBubble';
import TreeLayout from './../../components/TreeLayout';
import Bar from './../../components/Bar';
import ForceLayout from './../../components/ForceLayout';

const rowsOfDivs = [
  [{ className: 'col-6' }, { className: 'col-6' }],
  [{ className: 'col-6' }, { className: 'col-6' }],
  [{ className: 'col-3' }, { className: 'col-3' }, { className: 'col-3' }, { className: 'col-3' }]
];

const Widgets = () => {
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

  const forceLayoutProps = {
    className: 'this-one',
    data: forceLayoutData,
    type: 'Band',
    barWidthPercentage: 0.5,
    ...dims
  };

  return (
    <main id="responsive" className="test">
      <section className="row">
        <Line {...lineProps} />
      </section>

      {/* data-driven rows */}
      {rowsOfDivs.map((row, rowIdx) => (
        <Row key={`row-of-divs-${rowIdx}`}>
          {row.map((itm, itmIdx) => (
            <Card key={`card-${rowIdx}-${itmIdx}`} className={itm.className} />
          ))}
        </Row>
      ))}
    </main>
  );
};

/*
  <Treemap {...treeMapProps} />
      <Bubble {...treeMapProps} data={bubbleData} />
      <PackedBubble {...treeMapProps} data={packedBubbleData} />
      <TreeLayout {...treeMapProps} />
      <Bar {...barProps} />
      <ForceLayout {...forceLayoutProps} />
*/
export default Widgets;
