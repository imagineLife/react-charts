import { useState, useCallback, useLayoutEffect } from 'react';

function getDimensionObject(node) {
  const {
    width,
    height,
    x,
    top,
    left,
    right,
    bottom,
    y
  } = node.getBoundingClientRect();

  return {
    width,
    height,
    right,
    bottom,
    top: x ? x : top,
    left: y ? y : left,
    x: x ? x : left,
    y: y ? y : top
  };
}

function useDimensions({ liveMeasure = true } = {}) {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
      measure();

      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);

        return () => {
          window.removeEventListener('resize', measure);
          window.removeEventListener('scroll', measure);
        };
      }
    }
  }, [node]);

  return [ref, dimensions, node];
}

export default useDimensions;
