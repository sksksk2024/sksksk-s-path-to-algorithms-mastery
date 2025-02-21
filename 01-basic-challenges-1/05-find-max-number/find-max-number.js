function findMaxNumber(arr) {
  //   let maxi = arr[0];
  //   for (let i = 1; i < arr.length; ++i)
  //     if (arr[i] > maxi) {
  //       maxi = arr[i];
  //     }
  //   return maxi;
  return Math.max(...arr);
}

module.exports = findMaxNumber;
