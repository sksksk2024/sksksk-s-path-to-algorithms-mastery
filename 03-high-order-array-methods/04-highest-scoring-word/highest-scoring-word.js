// function highestScoringWord(str) {
//   const arr = str.split(' ');

//   let maxi = 0;
//   let bestWord = '';

//   const scores = arr.map((word) => {
//     let score = 0;
//     for (let i = 0; i < word.length; ++i) {
//       score += word.charCodeAt(0);
//     }
//     if (score > maxi) {
//       maxi = score;
//       bestWord = word;
//     }
//     return score;
//   });

//   return bestWord;
// }

// function highestScoringWord(str) {
//   const words = str.split(' ');

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }
//     return score;
//   });

//   let highestScore = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < scores.length; ++i) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//       highestIndex = i;
//     }
//   }

//   return words[highestIndex];
// }

function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

module.exports = highestScoringWord;
