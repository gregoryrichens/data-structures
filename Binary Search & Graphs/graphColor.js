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
    // check for loop

    // check all neighbors' colors and add to illegal set

    // look through colors and the first one that isn't illegal, add to the current node
}