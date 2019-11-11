const { Node } = require("./tree");
class BinarySearchTree {
  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }
  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    if (this.root.value < value) {
      this.root.right = new Node(value);
    }
    else {
      this.root.left = new Node(value);
    }
  }
  contains(value, current = this.root) {
    if (current === null || value === undefined) {
      return false;
    }
    if (current.value === value) {
      return true;
    }
    else if (current.value > value) {
      return this.contains(value, current.left);
    }
    else {
      return this.contains(value, current.right);
    }
  }
}
