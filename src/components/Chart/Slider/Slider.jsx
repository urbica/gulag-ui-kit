import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select, event } from 'd3-selection';
import { drag } from 'd3-drag';

// styled
import Container from './Container';

class Slider extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    xScale: PropTypes.func.isRequired,
    barWidth: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }).isRequired,
    height: PropTypes.number.isRequired,
    mobilizeSlider: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this._renderSlider();
  }

  componentDidUpdate() {
    this._renderSlider();
  }

  _gRef = React.createRef();

  _renderSlider = () => {
    // clear previous slider
    select(this._gRef.current)
      .selectAll('*')
      .remove();

    const { value, xScale, barWidth, mobilizeSlider } = this.props;
    const translateX = xScale(new Date(value, 0, 1));
    const slider = select(this._gRef.current);

    slider
      .append('line')
      .attr('stroke-width', 30)
      .attr('stroke', 'transparent')
      .attr('pointer-events', 'auto')
      .attr('x1', xScale.range()[0])
      .attr('x2', xScale.range()[1])
      .call(drag().on('start drag', this._onChange));

    this._handle = slider
      .append('g')
      .attr('class', 'handle')
      .attr('transform', `translate(${translateX}, 0)`);

    // handle year
    this._year = this._handle
      .append('text')
      .attr('class', 'currentYear')
      .text(value);

    if (mobilizeSlider) {
      // handle circle
      this._handle
        .append('circle')
        .attr('r', 10)
        .attr('cx', 5)
        .attr('fill', '#333')
        .attr('stroke', '#979797');

      this._year.attr('transform', 'translate(-11, -25)');
    } else {
      // handle shadow
      this._handle
        .append('rect')
        .attr('width', barWidth)
        .attr('height', 11)
        .attr('fill', '#1E2734')
        .attr('filter', 'url(#gaussianBlur)')
        .attr('transform', 'translate(1, -5)');

      // handle rect
      this._handle
        .append('rect')
        .attr('width', barWidth)
        .attr('height', 11)
        .attr('fill', '#ccc')
        .attr('transform', 'translate(1, -5)');

      // handle lines
      this._handle
        .append('path')
        .attr(
          'd',
          // eslint-disable-next-line
          "M15,3 L16,3 L16,9 L15,9 L15,3 Z M19,3 L20,3 L20,9 L19,9 L19,3 Z M23,3 L24,3 L24,9 L23,9 L23,3 Z"
        )
        .attr('fill', '#22252F')
        .attr('opacity', '0.3')
        .attr('transform', `translate(${-18.3 + barWidth / 2}, -5.5)`);

      this._year.attr('transform', `translate(-${(36 - barWidth) / 2}, 25)`);
    }
  };

  _onChange = () => {
    const { onChange } = this.props;

    if (onChange) {
      const { xScale, value } = this.props;

      const newValue = xScale.invert(event.x).getFullYear();

      if (value !== newValue) {
        onChange(newValue);
      }
    }
  };

  render() {
    const { margin, height } = this.props;

    return <Container innerRef={this._gRef} margin={margin} height={height} />;
  }
}

export default Slider;
