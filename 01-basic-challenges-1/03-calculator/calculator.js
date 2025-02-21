function calculator(a, b, operator) {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      throw new Error('Invalid Operator!');
  }

  return result;
  //   if (operator === '+') {
  //     return a + b;
  //   } else if (operator === '-') {
  //     return a - b;
  //   } else if (operator === '*') {
  //     return a * b;
  //   } else if (operator === '/') {
  //     return a / b;
  //   }
  //   return 'Invalid Operator!';
}

module.exports = calculator;
