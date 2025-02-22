// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   }

//   const x = fibonacci(num - 2);
//   const y = fibonacci(num - 1);

//   return x + y;
// }

const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

module.exports = fibonacci;
