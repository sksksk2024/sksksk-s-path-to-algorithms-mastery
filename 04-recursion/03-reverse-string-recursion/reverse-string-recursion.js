// function reverseString(str) {
//   if (str.length === 0) {
//     return '';
//   }

//   return (
//     str.slice(str.length - 1) + reverseString(str.slice(0, str.length - 1))
//   );
// }

// function reverseString(str) {
//   if (str === '') {
//     return '';
//   }

//   return reverseString(str.substr(1)) + str.charAt(0);
// }

const reverseString = (str) =>
  str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);

module.exports = reverseString;
