// iterative bfs

function bfs(graph, startPoint, endPoint) {
  let queue = [];
  queue.push(startPoint);

  let visited = new Set();

  while (queue.length > 0 ) {
    let nodeInQuestion = queue.shift();
    let neighbors = graph[nodeInQuestion];

    for (let neighbor of neighbors) {
      if (neighbor === endPoint) {
        // action when desired node is found
        return true;
      }
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }

  }
  return false;
}

// recursive bfs