const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const root = new Node('3');
const nodeNine = new Node('9');
const nodeTwenty = new Node('20');
const nodeFifteen = new Node('15');
const nodeSeven = new Node('7');

root.left = nodeNine;
root.right = nodeTwenty;
nodeTwenty.left = nodeFifteen;
nodeTwenty.right = nodeSeven;

const result = maxDepth(root);

return console.log(result);
