import React from 'react';
import Button from './button';
import {
  GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive,
} from '../buttonGroups';

const ButtonPanel = () => {
  const displayButton = element => <Button name={element.name} />;

  const groupOne = GroupOne.map(displayButton);
  const groupTwo = GroupTwo.map(displayButton);
  const groupThree = GroupThree.map(displayButton);
  const groupFour = GroupFour.map(displayButton);
  const groupFive = GroupFive.map(displayButton);

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
