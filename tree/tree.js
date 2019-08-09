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
    let current = this.root;
    if (!current) { this.root = new Node(value);}
    while (current) {
      if (current.val > value) {
        if (!current.left) {
          current.left = new Node(value);
          break;
        }
        else { current = current.left; }
      }

      if (current.val < value) {
        if (!current.right) {
          current.right = new Node(value)
          break;
        }
        else { current = current.right; }
      }
    }
    return this;
  }

  breadFirst(){
    if(!this.root){return null;}
    let inTree = new Queue();
    let outTree = new Queue();
    let current = this.root;

    inTree.enqueue(current);

    while(inTree.front){
      current = inTree.dequeue();
      outTree.enqueue(current);
      if(current.left){inTree.enqueue(current.left);}
      if(current.right){inTree.enqueue(current.right);}
      console.log(current.value);
    }
  }
}

class BinarySearchTree{
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

let ten = new Node(10);
let four = new Node(4);
let seven = new Node(7);
let eleven = new Node(11);
let nine = new Node(9);
let fifteen = new Node(15);
let twelve = new Node(12);


let tree = new BinaryTree(ten);
ten.left = seven;
ten.right = twelve;
seven.left = four;
seven.right = nine;
twelve.left = eleven;
twelve.right = fifteen;
tree.breadFirst();

module.exports = { BinaryTree, BinarySearchTree, Node, Queue };