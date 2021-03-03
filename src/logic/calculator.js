import Operator from './operate';

const Calculate = (value, btnName) => {
  const { total, next, operation } = value;
  let res;

  if (btnName === 'AC' || total === 'Error') {
    res = { total: null, next: null, operation: null };
  } else if (btnName === '+/-') {
    if (next === null) {
      res = { total: total ? (total * -1).toString() : total };
    } else {
      res = { next: (next * -1).toString() };
    }
  } else if (btnName === '%') {
    if (total === null && next !== null) {
      res = { next: next ? (next / 100).toString() : next };
    } else if (next === null && total !== null) {
      res = { total: total ? (total / 100).toString() : total };
    }
  } else if (['+', '-', 'X', '/'].includes(btnName)) {
    res = {
      total: total ?? next,
      next: null,
      operation: btnName,
    };
  } else if (btnName === '=') {
   res res = {
      total: Operator(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  } else if (btnName === '.' && next) {
    res = { next: next.includes('.') ? next : `${next}.` };
  } else {
    res = { next: next ? next + btnName : btnName };
  }

  return res;
};

export default Calculate;
