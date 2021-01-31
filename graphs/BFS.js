// iterative bfs

function bfs(graph, startPoint, endPoint) {
  let path = [];
  let queue = [];
  queue.push(startPoint);

  let visited = new Set();
  visited.add(startPoint);

  while (queue.length > 0 ) {
    let nodeInQuestion = queue.shift();
    path.push(nodeInQuestion);
    let neighbors = graph[adjacencyList][nodeInQuestion];

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
  return false; // or return path
}

// recursive bfs