import Operate from './operate';

const Calculate = (data, buttonName) => {
  const { total, next } = data;
  let result;
  if (buttonName === 'AC') {
    result = { total: 0, next: 0 };
  } else if (buttonName === '+/-') {
    result = { total: total * -1, next: next * -1 };
  } else if (['+', '-', '*', '÷', '%'].includes(buttonName)) {
    result = { total: Operate(total, next, buttonName), next: 0 };
  }
  return result;
};

export default Calculate;
