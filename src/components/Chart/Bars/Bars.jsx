import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';

// styled
import Container from './Container';

class Bars extends PureComponent {
  componentDidMount() {
    this.renderBars();
  }

  componentDidUpdate() {
    this.renderBars();
  }

  gRef = React.createRef();

  renderBars = () => {
    const {
      data,
      xScale,
      yScale,
      barWidth,
      x,
      y1,
      y2,
      height,
      onChange,
      value
    } = this.props;
    const gElement = select(this.gRef.current);

    gElement.selectAll('*').remove();

    const firstG = gElement.append('g');
    const noDataG = gElement.append('g');
    const secondG = gElement.append('g');

    // first group
    firstG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('fill-opacity', d => (x(d) === value ? '0.2' : '0.1'))
      .attr('x', d => xScale(new Date(x(d), 0, 1)) + 1)
      .attr('y', d => yScale(y1(d)))
      .attr('width', barWidth - 1)
      .attr('height', d => height - yScale(y1(d)));

    firstG
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('x1', d => xScale(new Date(x(d), 0, 1)) + 1)
      .attr('y1', d => yScale(y1(d)))
      .attr('x2', d => {
        const date = new Date(x(d), 0, 1);

        if (y1(d) === 0) {
          return xScale(date) + 1;
        }

        return xScale(date) + barWidth;
      })
      .attr('y2', d => yScale(y1(d)));

    // no data group
    noDataG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', yScale(300000))
      // TODO move noDataG height to prop
      .attr('height', height - yScale(300000))
      .attr('fill', 'url(#Gradient)')
      .on('click', d => (onChange ? onChange(x(d)) : null))
      .attr('x', d => xScale(new Date(x(d), 0, 1)) + 1)
      // do not render noDataG if there is no prisoners data
      .attr('width', d => (y2(d) === 0 ? barWidth - 1 : 0));

    // prisoners group
    secondG
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('fill-opacity', d => (x(d) === value ? '0.2' : '0.1'))
      .attr('x', d => xScale(new Date(x(d), 0, 1)) + 1)
      .attr('y', d => yScale(y2(d)))
      .attr('width', barWidth - 1)
      .attr('height', d => height - yScale(y2(d)))
      .on('click', d => (onChange ? onChange(x(d)) : null));

    secondG
      .selectAll('line')
      .data(data)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('x1', d => xScale(new Date(x(d), 0, 1)) + 1)
      .attr('x2', d => {
        const date = new Date(x(d), 0, 1);

        if (d.prisoners === 0) {
          return xScale(date) + 1;
        }

        return xScale(date) + barWidth;
      })
      .attr('y1', d => yScale(y2(d)))
      .attr('y2', d => yScale(y2(d)));
  };

  render() {
    const { margin, highlightBars } = this.props;

    return (
      <Container
        innerRef={this.gRef}
        margin={margin}
        highlightBars={highlightBars}
      />
    );
  }
}

Bars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  barWidth: PropTypes.number.isRequired,
  x: PropTypes.func.isRequired,
  y1: PropTypes.func.isRequired,
  y2: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  highlightBars: PropTypes.bool,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }).isRequired,
  value: PropTypes.number.isRequired
};

Bars.defaultProps = {
  onChange: null,
  highlightBars: false
};

export default Bars;
