// function arraySum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   last = arr.length - 1;

//   return arr[last] + arraySum(arr.slice(0, last));
// }

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + arraySum(arr.slice(1));
}

module.exports = arraySum;
