const validAnagrams = require('./valid-anagrams');

const result = validAnagrams('aaa', 'aaab');

// 'app', 'ppa'
// 'listen', 'silent'
// 'hello', 'world'
// 'astronomer', 'moonstarer'
// 'apple', 'banana'
// 'aaa', 'aaab'

console.log(result);
