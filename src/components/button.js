import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const Button = props => {
  const { name } = props;
  const operators = ['/', 'X', '+', '-', '='];

  function handleClick() {
    props.buttonPressed(name);
  }

  return (
    <button
      type="button"
      className="btn"
      onClick={handleClick}
      id={name}
      style={{ 'background-color': operators.includes(name) ? 'orange' : '', width: name === '0' ? '50%' : '25%' }}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  // wide: PropTypes.bool,
  // color: PropTypes.string,
};

Button.defaultProps = {
  // color: 'orange',
  // wide: false,
};

export default Button;
/* eslint-enable react/prop-types, no-console, arrow-body-style */
