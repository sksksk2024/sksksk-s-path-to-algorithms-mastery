class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) return [];

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// function maxDepth(root) {
//   if (!root) return 0;

//   let left = 1 + maxDepth(root.left);
//   let right = 1 + maxDepth(root.right);

//   if (left > right) {
//     return left;
//   }
//   return right;
// }

module.exports = {
  maxDepth,
  Node,
};
