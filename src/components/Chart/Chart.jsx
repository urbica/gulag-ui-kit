import React from 'react';
import { scaleLinear, scaleTime } from 'd3-scale';
import { max } from 'd3-array';
import PropTypes from 'prop-types';

// components
import Bars from './Bars';
import Axis from './Axis';
import Slider from './Slider';

const Chart = props => {
  const {
    width,
    height,
    margin,
    data = [],
    onChange,
    x,
    y1,
    y2,
    value,
    showBars,
    highlightBars,
    showTicks
  } = props;

  const xScale = scaleTime()
    // TODO remove 1918 and 1960
    .domain([new Date(1918, 0, 1), new Date(1960, 11, 31)])
    .range([0, width - margin.left - margin.right])
    .clamp(true);
  const yScale = scaleLinear()
    .domain([0, max(data, y2)])
    .range([height - margin.top - margin.bottom, 0]);
  const barWidth = (width - margin.left - margin.right) / data.length;

  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient
          id='Gradient'
          x1='0%'
          y1='31%'
          x2='10%'
          y2='0%'
          spreadMethod='repeat'
        >
          <stop offset='0%' stopColor='rgb(225,225,225)' />
          <stop offset='12%' stopColor='rgb(225,225,225)' />
          <stop offset='13%' stopColor='rgb(0,0,0)' />
          <stop offset='25%' stopColor='rgb(0,0,0)' />
          <stop offset='26%' stopColor='rgb(225,225,225)' />
          <stop offset='38%' stopColor='rgb(225,225,225)' />
          <stop offset='39%' stopColor='rgb(0,0,0)' />
          <stop offset='51%' stopColor='rgb(0,0,0)' />
          <stop offset='52%' stopColor='rgb(225,225,225)' />
          <stop offset='64%' stopColor='rgb(225,225,225)' />
          <stop offset='65%' stopColor='rgb(0,0,0)' />
          <stop offset='77%' stopColor='rgb(0,0,0)' />
          <stop offset='78%' stopColor='rgb(225,225,225)' />
          <stop offset='90%' stopColor='rgb(225,225,225)' />
          <stop offset='91%' stopColor='rgb(0,0,0)' />
          <stop offset='100%' stopColor='rgb(0,0,0)' />
        </linearGradient>
        <filter
          id='gaussianBlur'
          width='185.7%'
          height='400%'
          x='-42.9%'
          y='-150%'
          filterUnits='objectBoundingBox'
        >
          <feGaussianBlur stdDeviation='5' in='SourceGraphic' />
        </filter>
        <filter id='textShadow'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='4' />
        </filter>
      </defs>
      {showBars && (
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          barWidth={barWidth}
          x={x}
          y1={y1}
          y2={y2}
          height={height - margin.top - margin.bottom}
          onChange={onChange}
          highlightBars={highlightBars}
          value={value}
          margin={margin}
        />
      )}
      <Axis
        xScale={xScale}
        showTicks={showTicks}
        height={height - margin.top - margin.bottom}
        margin={margin}
      />
      <Slider
        xScale={xScale}
        value={value}
        onChange={onChange}
        barWidth={barWidth}
        height={height - margin.top - margin.bottom}
        margin={margin}
      />
    </svg>
  );
};

Chart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  x: PropTypes.func.isRequired,
  y1: PropTypes.func.isRequired,
  y2: PropTypes.func.isRequired,
  showBars: PropTypes.bool,
  highlightBars: PropTypes.bool,
  showTicks: PropTypes.bool
  // mobilizeSlider: PropTypes.arrayOf().isRequired
};

Chart.defaultProps = {
  onChange: null,
  showBars: true,
  highlightBars: false,
  showTicks: true
};

export default Chart;
