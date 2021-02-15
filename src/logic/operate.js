import Big from 'big.js';

const Operator = (numberOne, numberTwo, operation) => {
  let result = 0;
  const total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case '+':
      result = total.plus(next);
      break;

    case '-':
      result = total.minus(next);
      break;

    case '*':
      result = total.times(next);
      break;

    case '/':
      result = total.div(next);
      break;

    default:
      result = result.div(100);
      break;
  }
  return result;
};

export default Operator;
