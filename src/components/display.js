import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { results } = props;

  return (<input type="text" value={results} />);
};

Display.defaultProps = {
  results: '0',
};

Display.propTypes = {
  results: PropTypes.string,
};

export default Display;
