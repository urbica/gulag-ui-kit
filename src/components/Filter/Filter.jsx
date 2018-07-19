import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import FilterTitle from './styled/FilterTitle';
import Description from './styled/Description';
import FilterTop from './styled/FilterTop';
import Switcher from './styled/Switcher';

const Filter = props => {
  const { onChange, data } = props;

  return (
    <Container isActive={data.isActive} onClick={onChange}>
      <FilterTop>
        <FilterTitle>
          {data.title}
        </FilterTitle>
        <Switcher isActive={data.isActive} color={data.color} />
      </FilterTop>
      <Description>
        {data.description}
      </Description>
    </Container>
  );
};

Filter.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isActive: PropTypes.bool,
    color: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filter;
