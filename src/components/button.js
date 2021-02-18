import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;

  function handleClick() {
    props.buttonPressed(name);
  }

  return <button type="button" onClick={handleClick} id={name}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonPressed: PropTypes.func.isRequired,
};

export default Button;
