// First solution is a recursive approach I wrote myself - creates a stack via recursion
// Check below for iterative InterviewCake approach - creates an actual stack

// Binary Tree data structure to assist in testing

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function superbalanced(tree) {
  // track min and max height of a branch
  let minLeafHeight, maxLeafHeight;
  let superbalanced = true;

  // write a DFS recursive function
  function DFS(treeNode, height) {
    // if no children
    if (treeNode.left === null && treeNode.right === null) {
      minLeafHeight ? minLeafHeight = Math.min(height, minLeafHeight) : minLeafHeight = height;
      maxLeafHeight ? maxLeafHeight = Math.max(height, maxLeafHeight) : maxLeafHeight = height;
      if (maxLeafHeight - minLeafHeight > 1) {
        superbalanced = false;
        return;
      }
    }
    // if right then DFS right
    if (treeNode.left) {
      DFS(treeNode.left, height + 1);
    }
    // if left then DFS right
    if (treeNode.right) {
      DFS(treeNode.right, height + 1);
    }

  }
  // run the recursive function with tree and 1
  DFS(tree, 1);

// if max - min > 1 return false - could we add this check at the end of every recursive iteration?
  return superbalanced;
}

let testTree = new BinaryTreeNode(10);
testTree.insertLeft(8);
testTree.left.insertLeft(5);
testTree.left.left.insertLeft(3);
testTree.insertRight(12);

let testTree2 = new BinaryTreeNode(10);
testTree2.insertLeft(8);
testTree2.left.insertLeft(5);
testTree2.insertRight(12);

console.log(superbalanced(testTree), superbalanced(testTree2));

// iterative approach used by InterviewCake

function isBalanced(treeRoot) {

  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {

    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {

      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {

      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

// write a depth first search that tracks height
// any time a node has no left or right compare against max/min
// check each time if max - min is greater than 1

function superbalanced(root) {
  let min = 0;
  let max = 0;
  let superbalancedBool = true;

  function recursiveDFS(node, depth) {
    if (node.left === null && node.right === null) {
      min = Math.min(min, depth);
      max = Math.max(max, depth);
      if (max - min > 1) {
        superbalancedBool = false;
        return;
      }
    }
    if (node.left) { recursiveDFS(node.left), depth + 1 }
    if (node.right) {recursiveDFS(node.right), depth + 1 }
  }

  recursiveDFS(root);

  return superbalancedBool;
}

// iterative approach - will need to store node and height in stack
// if the root doesn't exist return true
// initiate stack
// store node pair
// while there is something in the stack
// pop it off and
// if there are no left and right see if the height is in our height storage
// if it's not check number in storage if not add it
// if length is greater than two or difference is greater than two return false

function superbalancedIterative(root) {
  if (!root) { return true }

  let stack = [];
  let heights = [];

  stack.push([root, 1]);

  while(stack.length) {
    let node = stack.pop();
    if (node[0].left === null & null[0].right === null) {
      if(heights.indexOf(node[1]) < 0) {
        heights.push(node[1]);
      }
    }
    if(heights.length > 2 || Math.abs(heights[1] - heights[0]) > 1) { return false }
    if(node.left) { stack.push([node.left, node[1] + 1]) }
    if(node.right) { stack.push([node.right, node[1] + 1]) }
  }

  return true;
}
