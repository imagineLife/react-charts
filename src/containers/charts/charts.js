import React, { Fragment } from 'react';
import lineData from './../../data/line.json'
import treeMapData from './../../data/treeMap.json'
import Line from './../../components/Line'
import Treemap from './../../components/Treemap'
const Charts = () => {

	const dims = {
		width: 450,
		height: 250,
		margins: {t: 10, l: 10, b:10}
	};

	const lineProps = {
		className: "thisLine",
		data: lineData,
		type: "Band",
		...dims
	}
	const treeMapProps = {
		className: "treeMap",
		data: treeMapData,
		...dims
	}

	return (
		<Fragment>
			<Line
				{...lineProps}
			/>
			<Treemap
				{...treeMapProps}
			/>
			</Fragment>
	)
};

export default Charts;