const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; --i) {
    queue.enqueue(str[i]);
  }

  let reveresedString = '';

  while (!queue.isEmpty()) {
    reveresedString += queue.dequeue();
  }

  return reveresedString;
};

module.exports = reverseStringWithQueue;
