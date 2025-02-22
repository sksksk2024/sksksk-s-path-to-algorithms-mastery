function findMissingNumber(arr) {
  const sum1 = ((arr.length + 1) * (arr.length + 2)) / 2;
  //   let sum2 = 0;
  //   for (num of arr) {
  //     sum2 += num;
  //   }

  const sum2 = arr.reduce((sum, num) => sum + num, 0);

  if (arr.length === 0) {
    return 1;
  }
  return sum1 - sum2;
}

module.exports = findMissingNumber;
