# Challenge Summary
Find common values in 2 binary trees.

## Challenge Description
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
For this challenge, we used my pre-existing binary tree traversal methods - in this case, breadth-first, to traverse across two separate binary trees. I then put all values into an array, and returned which values were duplicates.

## Solution
[UML](../assets/tree-intersection.jpg)