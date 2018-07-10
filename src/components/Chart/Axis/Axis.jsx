import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import { timeMonth } from 'd3-time';

// styled
import Container from './Container';

class Axis extends PureComponent {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  gRef = React.createRef();

  renderAxis = () => {
    const { xScale, showTicks } = this.props;

    const axis = axisBottom(xScale)
      .tickSizeOuter(0)
      .tickSizeInner(4);

    if (!showTicks) {
      axis.ticks(0, '');
    } else {
      axis
        .ticks(timeMonth.filter(d => d.getMonth() === 6))
        .tickFormat((d, i) => (i % 2 === 0 ? d.getFullYear() : null));
    }

    const gElement = select(this.gRef.current);
    gElement.call(axis);
  };

  render() {
    const { margin, height } = this.props;

    return <Container innerRef={this.gRef} margin={margin} height={height} />;
  }
}

Axis.propTypes = {
  xScale: PropTypes.func.isRequired,
  showTicks: PropTypes.bool.isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }).isRequired,
  height: PropTypes.number.isRequired
};

export default Axis;
