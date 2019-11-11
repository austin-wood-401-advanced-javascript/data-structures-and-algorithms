'use strict';

let BinaryTree = require('./binaryTree.js').BinaryTree;
let Node = require('../binaryTree.js').Node;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);
let eleven = new Node(11);
let twelve = new Node(12);
let thirteen = new Node(13);
let fourteen = new Node(14);
let fifteen = new Node(15);

describe('Tree Data Structure Tests', () => {

  it('Can create a tree', () => {
    let tree = new BinaryTree();
    expect(tree).toEqual({ root: null });
  });

  it('Can create a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = four;
    expect(tree.root.value).toEqual(4);
  });

  it('Can add right child to a single root node', () => {
    let tree = new BinaryTree();
    tree.root = one;
    tree.root.right = five;
    expect(tree.root.right.value).toBe(5);
  });

  it('Can add a left child to a single root node', () => {
    let tree = new BinaryTree();
    tree.root = one;
    tree.root.right = five;
    tree.root.left = seven;
    expect(tree.root.left.value).toBe(7);
  });

  it('Can return the result of a tree\'s breadth-first traversal', () => {
    let tree = new BinaryTree();
    tree.root = seven;
    tree.root.right = five;
    tree.root.left = two;
    tree.root.left = ten;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = twelve;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.breadthFirst([7, 5, 2, 10, 6, 9, 12, 11, 4]))
  });

  it('Can return the maximum value of the entire tree', () => {
    let tree = new BinaryTree();
    tree.root = seven;
    tree.root.right = five;
    tree.root.left = two;
    tree.root.left = ten;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = twelve;
    tree.root.right = eleven;
    tree.root.left = thirteen;
    expect(tree.findMaximumValue()).toEqual(13);
  });
});