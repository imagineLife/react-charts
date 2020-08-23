import React, { Fragment } from 'react'
import './ResponsiveWrapper.scss';

const ResponsiveWrapper = ({className, boxTxt, dimensions, children}) => {
	
	const boxRef = React.useRef(null);

	return(<div className={`box ${className}`} style={{width: `${dimensions.w}px`, height: `${dimensions.h}px`}}>
	  {children}
	</div>)
} 

export default ResponsiveWrapper;