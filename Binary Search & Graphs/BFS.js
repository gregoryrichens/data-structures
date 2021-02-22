function BFS(root) {
  let visited = [];
  let queue = [];

  queue.push(root);

  while(queue.length > 0) {
    let nodeInQuestion = queue.shift();
    visited.push(nodeInQuestion.value);
    if(nodeInQuestion.left) { queue.push(nodeInQuestion.left) }
    if(nodeInQuestion.right) { queue.push(nodeInQuestion.right) }
  }

  return visited;
}