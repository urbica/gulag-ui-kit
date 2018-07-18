import styled from 'styled-components';

const mainFontColour = 'rgb(226, 243, 227)';

export default styled.g`
  transform: translate(
    ${({ margin }) => margin.left}px,
    ${({ margin, height }) => margin.top + height}px
  );
  cursor: pointer;

  .handle {
    pointer-events: none;
  }

  .currentYear {
    fill: ${mainFontColour};
    font-weight: 600;
    text-shadow: 0 0 10px #2c3542;
  }
`;
