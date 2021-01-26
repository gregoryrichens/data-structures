// no balancing - perhaps revisit to balance later

class BinarySearchTree {
  constructor(value = null) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insertValue(value) {
    // set a value if there is no value
    if (this.data === null) {
      this.data = value;
      return;
    }
    // if there is a value in data, then we will need to add a new node to the tree
    // each node should be a binary search tree
    let newNode = new BinarySearchTree(value);

    // if the value is greater than the current node, set right node or perform insert on right node
    // if the value is less than the current node, set left node or perform insert on left node
    // return false if the tree already contains the value or the value can't be compared with comparison operators
    if (value > this.data) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insertValue(value);
      }
    } else if (value < this.data) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.insertValue(value);
      }
    } else {
      return false;
    }
  }
}