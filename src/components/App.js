import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonpanel';
import Calculate from '../logic/calculator';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const data = { next, operation, total };

  const buttonPressed = buttonName => {
    const { next, operation, total } = Calculate(data, buttonName);
    setTotal(total);
    setNext(next);
    setOperation(operation);
  };

  return (
    <>
      <Display result={next || operation || total || '0'} />
      <ButtonPanel clickHandler={buttonPressed} />
    </>
  );
};

export default App;
