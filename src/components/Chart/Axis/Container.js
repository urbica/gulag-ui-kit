import styled from 'styled-components';

export default styled.g`
  transform: translate(
    ${({ margin }) => margin.left}px,
    ${({ margin, height }) => margin.top + height}px
  );

  & path,
  & line {
    stroke: rgb(226, 243, 227);
    stroke-width: 1;
    opacity: 0.4;
  }

  & text {
    fill: rgb(226, 243, 227);

    font-size: 12px;
    font-family: Formular;

    opacity: 0.5;
  }
`;
