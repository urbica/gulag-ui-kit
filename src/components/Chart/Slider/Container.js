import styled from 'styled-components';

const mainFontColour = 'rgb(226, 243, 227)';

export default styled.g`
  transform: translate(
    ${({ margin }) => margin.left}px,
    ${({ margin, height }) => margin.top + height}px
  );
  cursor: pointer;

  .circle {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .rect {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .handleLines {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .handleShadow {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .currentYear {
    fill: ${mainFontColour};
    font-weight: 600;
    text-shadow: 0 0 10px #2c3542;
  }
`;
