// function validAnagrams(word1, word2) {
//   const arr1 = word1.split('');
//   const arr2 = word2.split('');

//   let a = {},
//     b = {};

//   for (letter of arr1) {
//     a[letter] = (a[letter] || 0) + 1;
//   }

//   for (letter of arr2) {
//     b[letter] = (b[letter] || 0) + 1;
//   }

//   for (letter of arr1) {
//     if (a[letter] !== b[letter]) {
//       return false;
//     }
//   }

//   for (letter of arr2) {
//     if (b[letter] !== a[letter]) {
//       return false;
//     }
//   }

//   return true;
// }

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

module.exports = validAnagrams;
