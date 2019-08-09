### Binary Trees
### Author: Austin Wood

### Links and Resources
* [submission PR](https://github.com/austin-wood-401-advanced-javascript/data-structures-and-algorithms/pull/10)
  
### Stacks Challenge:

### Tree Challenge:
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a Binary Tree class that defines a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

# Binary Tree Class
##  Create a BinarySearchTree class that:
* Defines a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
* Defines a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
#### To Test Run
* npm test


#### UML
* [UML](https://github.com/austin-wood-401-advanced-javascript/data-structures-and-algorithms/blob/master/tree/assets/FizzBuzzTree.jpg)

# BreadthFirst Traversal
Write a breath-first traversal method to extend our binaryTree class. 

## Challenge Description
Without utilizing any built-in methods, traverse the tree breadth-first and console.log each node's value.

## Approach & Efficiency
To record the tree's nodes in the specified order we drew inspiration from the levelOrder method of traversing a tree, where you start from the root and walk left node, then right node; rinse, repeat. So if you have a root of 5 whose left is 4 and right is 6... now we are going to get hairy... 4's got kids named 3 and 7; and 6 has kids named 2 and 8, our traversal would go in this order: 5, 4, 6, 3, 7, 2, 8. (see the UML)

As we traverse the tree, since we aren't being required to remember or return any physical output, we are going to run a console log at each node we hit, upon arrival.

Since we are traveling the tree from the root, across for as long as the height, this lookup would have an efficiency of `O(hw)`. It will take as long as the tree is high/deep AND wide.

## Solution
Our method takes in a tree and begins at the root. from the root it will first look left, then right, and reassign the `current` value based on the queue order. WE will loop through until our inTree queue is empty.

## UML*
![whiteboarding for the breadth traversal](https://github.com/austin-wood-401-advanced-javascript/data-structures-and-algorithms/blob/master/tree/assets/8.8UML.jpg)
