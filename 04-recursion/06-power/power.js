// function power(a, b) {
//   if (b === 0) {
//     return 1;
//   }

//   let x = power(a, Math.floor(b / 2));

//   if (b % 2 === 1) {
//     return x * x * a;
//   }
//   return x * x;
// }

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

module.exports = power;
