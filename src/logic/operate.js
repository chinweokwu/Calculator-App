import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === null || numberTwo === null) {
    return 0;
  }

  let result = 0;
  const total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case '+':
      result = (parseFloat(total) + parseFloat(next)).toString();
      break;

    case '-':
      result = total - next;
      break;

    case 'X':
      result = total * next;
      break;

    case '/':
      result = total / next;
      break;

    default:
      break;
  }

  return (result === Infinity ? 'Error' : result);
};

export { operate as default };
