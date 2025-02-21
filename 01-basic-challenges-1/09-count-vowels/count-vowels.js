function countVowels(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; ++i) {
    let char = str[i].toLowerCase();
    if ('aeiou'.includes(char)) {
      cnt++;
    }
  }

  return cnt;
}

// function countVowels(a) {
//   return a.charCodeAt();
// }

module.exports = countVowels;
