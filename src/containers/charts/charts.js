import React from 'react';
import lineData from './../../data/line.json'
import Line from './../../components/Line'
const Charts = () => {
	const lineProps = {
		className: "thisLine",
		width: 450,
		height: 250,
		margins: {t: 10, l: 10, b:10},
		data: lineData,
		type: "Band"
	}

	return (
	<Line
		{...lineProps}
	/>
)
};

export default Charts;
