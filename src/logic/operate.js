import Big from 'big.js';

const Operator = (numberOne, numberTwo, operation) => {
  let result = 0;
  const i = Big(numberOne);
  const j = Big(numberTwo);

  switch (operation) {
    case '+':
      result = i + j;
      break;

    case '-':
      result = i - j;
      break;

    case '*':
      result = i * j;
      break;

    case '/':
      result = i / j;
      break;

    default:
      result /= 100;
      break;
  }
  return result;
};

export default Operator;
