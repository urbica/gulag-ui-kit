import React from 'react';
import PropTypes from 'prop-types';

// icon
import menu from './menu.svg';

// styled
import Container from './styled/Container';
import Button from './styled/Button';
import Title from './styled/Title';

const ButtonWithTitle = ({ onClick, children }) => (
  <Container>
    <Button onClick={onClick}>
      <img src={menu} alt='menu' />
    </Button>
    <Title>
      {children}
    </Title>
  </Container>
);

ButtonWithTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

/** @component */
export default ButtonWithTitle;
