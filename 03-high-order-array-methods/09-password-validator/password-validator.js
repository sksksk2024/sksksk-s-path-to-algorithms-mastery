// function validatePassword(str) {
//   const arr = str.split('');

//   const digit = arr.some((char) => char >= '0' && char <= '9');

//   const upperCase = arr.some((char) => char >= 'A' && char <= 'Z');

//   const lowerCase = arr.some((char) => char >= 'a' && char <= 'z');

//   return arr.length < 8 ? false : digit && upperCase && lowerCase;
// }

const validatePassword = (password) => {
  const isLengthValid = password.length >= 8;

  const hasUpperCase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowerCase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split('')
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
};

module.exports = validatePassword;
