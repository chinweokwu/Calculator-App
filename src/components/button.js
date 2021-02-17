import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const Button = props => {
  const { name } = props;

  function handleClick() {
    props.buttonPressed(name);
  }

  return <button type="button" onClick={handleClick} id={name}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
/* eslint-enable react/prop-types, no-console, arrow-body-style */
