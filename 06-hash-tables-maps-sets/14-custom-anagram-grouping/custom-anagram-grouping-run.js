const anagramGrouping = require('./custom-anagram-grouping');

const words = [
  'cat',
  'act',
  'silent',
  'listen',
  'tac',
  'hello',
  'oof',
  'foo',
  'bar',
];

const result = anagramGrouping(words);

console.log(result);
