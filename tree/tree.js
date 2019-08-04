'use strict';

import { isWhile } from "@babel/types";

class Node {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  constructor( root=null){
    this.root = root;
  }
  //in preOrder you care about the node the minute you see it. 
  insert(val){
    //deals with empty trees
    let newNode = new Node(val);
    if(this.root ===null){this.root = newNode}
    else{let current = this.root;
      //if its a smaller value WORK IN PROGRESS
      if(typeof val === number){

        while(current.left !== null && current.value > val){
          if(current.value > val){
            current = current.left;
          }
          else 'stuff'
        }};
      }
    //check if the child is greater
  }
  preorder(){
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) {_walk(node.left);};
      if(node.right) { _walk(node.right);}

    };

    _walk(this.root);

    return results;
  };

  postOrder(){
    let results = [];

    let _walk = (node) => {
      if(node.left) {_walk(node.left);};
      if(node.right) { _walk(node.right);}
      results.push(node.value);
    };

    _walk(this.root);

    return results;
  }


  inOrder(){
    let results = [];

    let _walk = (node) => {
      if(node.left) {_walk(node.left);};
      results.push(node.value);
      if(node.right) { _walk(node.right);}

    };

    _walk(this.root);

    return results;
  }

  levelOrder(){
    let results = [];
    let nodeQueue = [];//use an actual queue
    nodeQueue.push(this.root);//push the root
    while(nodeQueue.length){
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {nodeQueue.push(current.left);}
      if(current.right) {nodeQueue.push(current.right);}

    }
    return results;
  }
}


let ten = new Node(10);
let four = new Node(4);
let seven = new Node(7);
let eleven = new Node(11);
let nine = new Node(9);
let fifteen = new Node(15);
let twelve = new Node(12);


ten.left = seven;
ten.right = twelve;
seven.left = four;
seven.right = nine;
twelve.left = eleven;
twelve.right = fifteen;

let tree = new BinaryTree(ten);

console.log(tree);
// console.log(tree.preorder());
console.log(tree.inOrder());

