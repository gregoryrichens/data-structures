// refer to Graph.js for the structure of the Graph

// ITERATIVE DFS

function depthFirstSearch(graph, startPoint, endPoint) {
  // initiate path
  let path = [];
  // initiate visited
  let visited = new Set();
  // add start to visited
  visited.add(startPoint);
  // initiate a stack
  let stack = [];
  // add start to stack
  stack.push(startNode);

  while (stack.length > 0) {
  // if there is something in the stack
    let currentNode = stack.pop();
    // pop it off
    // add to path
    path.push(currentNode);

    // if it is what we are looking for, then do what we do
    if (currentNode === endPoint) { return path // or whatever we do }
    // for each of its neighbors
    currentNode[adjacencyList].forEach (neighbor => {
      if(!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    })
      // add to visited
      // add them to the stack
  }
}

// recursive dfs
function recursiveDepthFirstSearch(graph, startPoint, endPoint) {
  // we need a variable to track our path
  let path = [];
  // we need a variable to track if something has been visited
  let visited = new Set();

  // recursive helper function that takes a node
  function dfs(node) {
    // if the node matches what we are looing for - or in some cases if the node doesn't exist
    if (node === endPoint) {
      path.push(node);
      visited.add(endPoint);
      return;
    }
    if (!visited.has(node)) {
      visited.add(node);
      path.push(node);
      graph[adjacencyList][node].forEach( neighbor => {
        return dfs(neighbor);
      });
    }
  }(startPoint);
    // if the node doesn't exist return null
    // add the node to visited
    // add the node to path
  return path;
}