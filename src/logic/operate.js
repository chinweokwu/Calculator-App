import Big from 'big.js';

const Operator = (numberOne, numberTwo, operation) => {
  let result = 0;
  const total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case '+':
      result = total + next;
      break;

    case '-':
      result = total - next;
      break;

    case '*':
      result = total * next;
      break;

    case '/':
      result = total / next;
      break;

    default:
      result /= 100;
      break;
  }
  return result;
};

export default Operator;
