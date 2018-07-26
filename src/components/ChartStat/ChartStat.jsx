import React from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import Amount from './styled/Amount';
import Title from './styled/Title';

const ChartStat = props => {
  const { stats = [] } = props;

  return (
    <Container>
      {stats.map(stat => (
        <div key={stat.id}>
          <Amount lineColor={stat.lineColor}>
            {stat.value}
          </Amount>
          <Title>
            {stat.description}
          </Title>
        </div>
      ))}
    </Container>
  );
};

ChartStat.propTypes = {
  stats: PropTypes.arrayOf({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    lineColor: PropTypes.string
  }).isRequired
};

export default ChartStat;
