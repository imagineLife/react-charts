import React from 'react';
import ResponsiveWrapper from './../../components/ResponsiveWrapper';
import * as dsh from 'd3-shape';
import * as dscl from 'd3-scale';

const Line = ({width, height, data, margins, type, className}) => {
	const { xDomain, yDomain, points } = data;
	console.log('points')
	console.log(points)

	let lineSize = {
		w : width - margins.l,
		h : height - margins.t
	}
	

	let thisScale = `scale${type}`
	
	const xScale = dscl[thisScale]()
		.domain(xDomain)
		.range([0, lineSize.w]);	
	
	const yScale = dscl.scaleLinear()
		.domain(yDomain)
		.range([height - margins.b, margins.t]);
	
	let thisLine = dsh.line()
	.x(d => xScale(d.x))
	.y(d => {
		const scaledY = yScale(d.y)
		console.log('scaledY')
		console.log(scaledY)
		
		return scaledY
	});
	
	console.log('thisLine(points)')
	console.log(thisLine(points))
	
	return(
		<ResponsiveWrapper 
			className="lineBox"
			dimensions={{w: width, h: height}}
		>
			<svg className={`${className}-svg`} {...{height, width}}>
				<g className="line-group" transform={`translate(${margins.l},${margins.t})`}>
					<path 
						fill="none"
						stroke="steelblue"
						strokeWidth={3}
						d={thisLine(points)}
					/>
				</g>
			</svg>
		</ResponsiveWrapper>

	)
};

export default Line;
