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