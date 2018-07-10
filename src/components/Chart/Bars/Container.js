import styled from 'styled-components';

const mainFontColour = 'rgb(226, 243, 227)';

export default styled.g`
  transform: translate(
    ${({ margin }) => margin.left}px,
    ${({ margin }) => margin.top}px
  );
  pointer-events: auto;

  & g:first-child {
    & rect {
      fill: #eb4200;
      ${({ highlightBars }) => (highlightBars ? 'fill-opacity: 1' : null)};
      transition: fill-opacity 2s;
      cursor: pointer;
      &:hover {
        fill-opacity: 0.2;
        transition: fill-opacity 0.2s;
      }
    }
    & line {
      stroke: #ff2b00;
      stroke-width: 2px;
    }
  }

  & g:nth-child(2) {
    & rect {
      cursor: pointer;
      fill-opacity: 0.1;
    }
  }

  & g:last-child {
    & rect {
      fill: ${mainFontColour};
      ${({ highlightBars }) => (highlightBars ? 'fill-opacity: 0.6' : null)};
      transition: fill-opacity 2s;
      cursor: pointer;
      &:hover {
        fill-opacity: 0.2;
        transition: fill-opacity 0.2s;
      }
    }
    & line {
      stroke: ${mainFontColour};
      stroke-width: 2px;
    }
  }
`;
