// function factorial(num) {
//   if (num < 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

const factorial = (num) => (num < 1 ? 1 : num * factorial(num - 1));

module.exports = factorial;
