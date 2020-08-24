import React from 'react';

import Line from './../../components/Line'
const Charts = () => (
	<Line
		className="thisLine"
		width={450}
		height={250}
		margins={{t: 10, l: 10, b:10}}
		data={{
			xDomain: [201908, 201909, 201910, 201911, 201912, 202001],
			yDomain:[0,40],
			points: [
				{
					x: 201908,
					y: 14
				},
				{
					x: 201909,
					y: 39
				},
				{
					x: 201910,
					y: 22
				},
				{
					x: 201911,
					y: 7
				},
				{
					x: 201912,
					y: 11
				},
				{
					x: 202001,
					y: 32
				}
			]
		}}
		type="Band"
	/>

);

export default Charts;
