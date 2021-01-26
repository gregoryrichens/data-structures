function findLargest(rootNode) {
  if(!rootNode) {
    throw new Error('tree must have at least one element');
  }
  if (rootNode.right === null) {
    return rootNode.value;
  } else {
    findLargest(rootNode.right);
  }
}

function secondLargest(rootNode) {
  if(!rootNode || (!rootNode.right && !rootNode.left)) {
    throw new Error('the tree must have at least two values');
  }

  // current value is largest and there's left
  if (!rootNode.right && rootNode.left) {
    return findLargest(rootNode.left);
  }

  // parent of largest and largest no right and no left
  if(rootNode.right && !rootNode.right.right && !rootNode.right.left) {
    return rootNode.value;
  }

  return secondLargest(rootNode.right);

}

// optimized for constant space with iterative
