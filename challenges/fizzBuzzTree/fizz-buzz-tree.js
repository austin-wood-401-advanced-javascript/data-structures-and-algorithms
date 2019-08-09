'use strict';

function fizzBuzzTree(node) {
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'FizzBuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  }
  fizzBuzzTree(node.left);
  fizzBuzzTree(node.right);
  return node;
}

module.exports = fizzBuzzTree;