import BinarySearchTree from './binarySearchTree';

function DFS(root) {
  let stack = [];
  let visited = [];

  stack.push(root);

  while(stack.length > 0) {
    let nodeInQuestion = stack.pop();
    visited.push(nodeInQuestion.value);

    if (nodeInQuestion.left) { stack.push(nodeInQuestion.left) }
    if (nodeInQuestion.right) { stack.push(nodeInQuestion.right) }
  }

  return visited;
}

function DFSrecursive(root) {
  let visited =  [];

  function iterativeHelper(node) {
    visited.push(node.value);
    if(node.left) { iterativeHelper(node.left) }
    if(node.right) { iterativeHelper(node.right) }
  }(root);

  return visited;
}