// Given an undirected graph with maximum degree D, find a graph coloring using at most D+1D+1 colors

// this is what the GraphNodes will look like

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function findLegalColor(graph, colors) {
  // we need to move through every node in the graph
  graph.forEach((graphNode) => {
    if (graphNode.neighbors.has(graphNode)) {
      throw new Error('no legal color for a loop');
    }

    let forbiddenColors = new Set();
  // check all neighbors' colors and add to illegal set
    graphNode.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        forbiddenColors.add(neighbor.color);
      }
    })
    // look through colors and the first one that isn't illegal, add to the current node
    for (let i = 0; i < colors.length; i++){
      let colorOption = colors[i];

      if(!forbiddenColors.has(colorOption)) {
        // set color if it is free
        graphNode.color = colorOption;
        break;
      }
    }
  });
}