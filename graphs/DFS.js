// refer to Graph.js for the structure of the Graph

// iterative dfs

function depthFirstSearch(graph, startPoint, endPoint) {
  // initiat
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