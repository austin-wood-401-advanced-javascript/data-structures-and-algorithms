'use strict';

// const Node = require('../linked-lists/linked-list.js');
const { Stack, Queue } = require('../stacksAndQueues/stacksAndQueues.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
  }

  preOrder() {
    let results = new Queue();

    let _walk = (node) => {
      results.enqueue(node.value);
      if (node.left) { _walk(node.left); }

      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return results;
  }

  postOrder() {
    let results = new Queue();

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }

      if (node.right) { _walk(node.right); }

      results.enqueue(node.value);

    };
    _walk(this.root);

    return results;
  }

  inOrder() {
    let results = new Queue();

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }

      results.enqueue(node.value);

      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return results;
  }
  
  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    if (this.root.value < value) {
      this.root.right = new Node(value);
    } else {
      this.root.left = new Node(value);
    }
  }

}

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
    } else {
      this.root.left = new Node(value);
    }
  }

  contains(value, current = this.root) {
    if (current === null || value === undefined) {
      return false;
    }
    if (current.value === value) {
      return true;
    } else if (current.value > value) {
      return this.contains(value, current.left);
    } else {
      return this.contains(value, current.right);
    }
  }
}


module.exports = { BinaryTree, BinarySearchTree, Node, Queue };