// const isValidIPv4 = (str) => {
//   const numbers = str.split('.');

//   const validatedNums = numbers.reduce((acc, num) => {
//     if (num[0] === '0' || num < 0 || num > 255) {
//       return false;
//     }
//     return acc + 1;
//   }, 0);

//   if (validatedNums === 4) {
//     return true;
//   }

//   return false;
// };

const isValidIPv4 = (input) => {
  const octets = input.split('.');

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

module.exports = isValidIPv4;
