function countOccurrences(word, letter) {
  //   Method 1
  let cnt = 0;
  cnt = word.split(letter).length - 1;

  // Method 2
  //   for (let i = 0; i < word.length; ++i)
  //     if (word[i] === letter) {
  //       cnt++;
  //     }

  return cnt;
}

module.exports = countOccurrences;
