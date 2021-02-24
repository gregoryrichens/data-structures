function validBS(tree) {
  let dfStack = [];
  dfStack.push({
    node: tree,
    minValue: Number.NEGATIVE_INFINITY,
    maxValue: Number.POSITIVE_INFINITY,
  });

  while(dfStack.length > 0) {
    let { node, minValue, maxValue } = dfStack.pop();

    if (node.value <= minValue || node.value >= maxValue) {
      return false;
    }

    if (node.left) {
      dfStack.push({
        node: node.left,
        minValue,
        maxValue: node.value,
      });
    }

    if (node.right) {
      dfStack.push({
        node: node.right,
        minValue: node.value,
        maxValue,
      });
    }
  }
  return true;
}

function recursiveValidBS(treeNode, minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY) {

  if (!treeNode) { return true }

  if (treeNode.value <= minValue || treeNode.value >= maxValue) {
    return false;
  }

  return recursiveValidBS(treeNode.left, minValue, treeNode.value) && recursiveValidBS(treeNode.right, treeNode.value, maxValue);
}

isBinarySearchTreeIterative(root) {
  // create stack
  let nodeStack = [];
  nodeStack.push({
    node: root,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  })
  // while there is a stack
  while(nodeStack.length) {
    let nodeInQuestion = nodeStack.pop();
  // if value is less then lower bound or greater than upper bound return false
    if(nodeInQuestion.node.value <= nodeInQuestion.lowerBound || nodeInQuestion.node.value >= nodeInQuestion.upperBound) {
      return false;
    }
  // if there is a left
    if (nodeInQuestion.node.left) {
    // push onto the stack with value, lower bound is lower bound, upper bound is noode value
      nodeStack.push({
        node: nodeInQuestion.node.left,
        upperBound: nodeInQuestion.node.value,
        lowerBound: nodeInQuestion.node.lowerBound,
      });
    }
  // if there is a right
    if (nodeInQuestion.node.right) {
    // push onto the stack with upper bound, and lower bound as node value
      nodeStack.push({
        node: nodeInQuestion.node.right,
        upperBound: nodeInQuestion.node.upperBound,
        lowerBound: nodeInQuestion.node.value,
      });
    }
  }
  // return true
  return true;
}