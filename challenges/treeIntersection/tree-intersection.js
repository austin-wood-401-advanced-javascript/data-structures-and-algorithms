'use strict';

function tree_intersection(firstTree, secondTree) {
  firstTree = firstTree.breadthFirst();
  secondTree = secondTree.breadthFirst();
  let duplicates = [];
  for (let i = 0; i < firstTree.length; i++) {
    for (let j = 0; j < secondTree.length; j++) {
      if (secondTree[j] === firstTree[i]) {
        duplicates.push(secondTree[j]);
      }
    }
  }
  return duplicates;
}

module.exports = tree_intersection;