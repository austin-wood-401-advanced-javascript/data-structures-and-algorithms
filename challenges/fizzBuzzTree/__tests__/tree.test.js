'use strict';

const FizzBuzzTree = require('../fizz-buzz-tree.js');
const Tree = require('./tree/tree.js');

describe('fizzbuzztree', () => {
  it('can successfully change values appropriately', () => {
    let tree = new BinaryTree(10);
    tree.add(7);
    tree.add(4);
    tree.add(9);
    tree.add(12);
    tree.add(11);
    tree.add(15);
    let newTree = fizzBuzzTree(tree);
    expect(newTree.inOrder()).toEqual([4, 7, 'Fizz', 'Buzz', 11, 'Fizz', 'FizzBuzz']);
  });
});