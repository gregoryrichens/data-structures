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