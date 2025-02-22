function sumOfEvenSquares(arr) {
  const evenSquares = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((sum, square) => sum + square, 0);

  return evenSquares;
}

module.exports = sumOfEvenSquares;
