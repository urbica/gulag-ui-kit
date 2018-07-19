import React from 'react';
import PropTypes from 'prop-types';

// icon
import menu from './menu.svg';

// styled
import Container from './styled/Container';
import Button from './styled/Button';
import Title from './styled/Title';

const Menu = ({ onClick, title }) => (
  <Container>
    <Button onClick={onClick}>
      <img src={menu} alt='menu' />
    </Button>
    <Title>
      {title}
    </Title>
  </Container>
);

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

/** @component */
export default Menu;
