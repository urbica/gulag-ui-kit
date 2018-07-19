import styled from 'styled-components';

export default styled.div`
  margin-bottom: 40px;

  color: rgba(226, 243, 227, ${({ isActive }) => (isActive ? 1 : 0.2)});

  transition: 0.4s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    color: rgba(226, 243, 227, 0.6);
    transition: 0.4s;
  }
`;
