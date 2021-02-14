import React from 'react';
import Button from './button';
import {
  Group1, Group2, Group3, Group4, Group5,
} from '../buttonGroup';

const ButtonPanel = () => {
  const displayButtons = element => <Button name={element.name} />;

  const groupOne = Group1.map(displayButtons);
  const groupTwo = Group2.map(displayButtons);
  const groupThree = Group3.map(displayButtons);
  const groupFour = Group4.map(displayButtons);
  const groupFive = Group5.map(displayButtons);

  return (
    <div>
      <div>{groupOne}</div>
      <div>{groupTwo}</div>
      <div>{groupThree}</div>
      <div>{groupFour}</div>
      <div>{groupFive}</div>
    </div>
  );
};

export default ButtonPanel;
