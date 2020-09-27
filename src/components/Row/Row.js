import React from 'react';

const Row = ({ className, children, height }) => (<section className={`row ${className && className}`} style={{ height }}>{children && children}</section>);

export default Row;
