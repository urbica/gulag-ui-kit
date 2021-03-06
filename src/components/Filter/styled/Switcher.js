import styled from 'styled-components';

const disableColor = '122,133,126';

export default styled.div`
  flex: 0 0 40px;
  height: 22px;

  margin-left: 30px;

  border-radius: 11px;

  background-color: rgba(
    // TODO: refactor this mess
      ${({ isActive, color }) => (isActive ? color : disableColor)},
    0.2
  );

  transition: 0.4s;
  &:after {
    content: '';
    display: block;
    width: 22px;
    height: 22px;

    border-radius: 50%;
    background-color: rgba(
      // TODO: refactor this mess
        ${({ isActive, color }) => (isActive ? color : disableColor)},
      1
    );
    transform: translateX(${({ isActive }) => (isActive ? '18px' : 0)});

    transition: 0.4s;
  }
`;
