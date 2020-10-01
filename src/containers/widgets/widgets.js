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
import useWindowSize from './../../Hooks/UseWindowSize';

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

const Widgets = () => {
  const size = useWindowSize();

  const dims = {
    margins: { t: 10, l: 10, b: 10 }
  };

  const lineProps = {
    className: 'col-6 med-height',
    data: lineData,
    type: 'Band',
    parentSize: size,
    ...dims
  };

  const barProps = {
    className: 'col-6 med-height',
    data: barData,
    type: 'Band',
    barWidthPercentage: 0.5,
    parentSize: size,
    ...dims
  };

  const treeMapProps = {
    className: 'col-6 med-height treeMap',
    data: treeMapData,
    parentSize: size,
    ...dims
  };

  const bubbleProps = {
    className: 'col-6 med-height treeMap',
    data: bubbleData,
    parentSize: size,
    ...dims
  };

  const packedBubbleProps = {
    className: 'col-6 med-height packed-bubble',
    data: packedBubbleData,
    parentSize: size,
    ...dims
  };

  const rowsOfDivs = [
    [
      { child: 'Line', ...lineProps },
      { child: 'Bar', ...barProps }
    ],
    [
      { child: 'Treemap', ...treeMapProps },
      { child: 'Bubble', ...bubbleProps }
    ],
    [
      { child: 'PackedBubble', ...packedBubbleProps },
      { child: 'Bubble', ...bubbleProps }
    ],
    [
      { className: 'col-3' },
      { className: 'col-3' },
      { className: 'col-3' },
      { className: 'col-3' }
    ]
  ];

  const forceLayoutProps = {
    className: 'this-one',
    data: forceLayoutData,
    type: 'Band',
    barWidthPercentage: 0.5,
    ...dims
  };

  const widgetLookup = {
    Line,
    Bar,
    Treemap,
    Bubble,
    PackedBubble
  };

  return (
    <main id="responsive" className="test">
      <section className="row">
        <Line {...lineProps} />
      </section>

      {/* data-driven rows */}
      {rowsOfDivs.map((row, rowIdx) => (
        <Row key={`row-of-divs-${rowIdx}`}>
          {row.map((itm, itmIdx) => {
            {
              /* Widget from lookup-object above */
            }
            let ChildWidget = itm.child ? widgetLookup[itm.child] : false;
            return (
              <Card
                key={`card-${rowIdx}-${itmIdx}`}
                className={itm.className}
                parentSize={itm.parentSize}
              >
                {ChildWidget && <ChildWidget {...itm} />}
              </Card>
            );
          })}
        </Row>
      ))}
    </main>
  );
};

/*
      <Bubble {...treeMapProps} data={bubbleData} />
      <PackedBubble {...treeMapProps} data={packedBubbleData} />
      <TreeLayout {...treeMapProps} />
      <Bar {...barProps} />
      <ForceLayout {...forceLayoutProps} />
*/
export default Widgets;
