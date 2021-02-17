import React from 'react';
import Button from './button';
import {
  GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive,
} from '../buttonGroups';
/* eslint-disable react/prop-types, no-console, arrow-body-style */
const ButtonPanel = props => {
  const handleClick = buttonName => {
    const { clickHandler } = props;
    clickHandler(buttonName);
  };

  const displayButton = e => <Button key={e.id} name={e.name} buttonPressed={handleClick} />;

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
/* eslint-enable react/prop-types, no-console, arrow-body-style */
