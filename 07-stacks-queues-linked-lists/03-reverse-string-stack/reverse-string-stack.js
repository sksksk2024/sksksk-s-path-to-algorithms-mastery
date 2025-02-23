const Stack = require('./stack');

// function reverseStringStack(str) {
//   const revStr = new Stack();
//   const revArr = [];

//   for (const char of str) {
//     revStr.push(char);
//   }

//   while (!revStr.isEmpty()) {
//     revArr.push(revStr.pop());
//   }

//   return revArr.join('');
// }

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; ++i) {
    stack.push(str[i]);
  }

  let reversedStr = [];

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

module.exports = reverseStringStack;
