'use strict';

const myTree = require('../../tree/tree.js');

let binaryTree = myTree.BinaryTree;

class bread extends binaryTree{
  constructor(){
    super();
  }

  breadFirst(){
    console.log('PING');
    if(!this.root){return null;}

    let _walk = function(node){
      console.log(node.value);
      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}
    };
    
    _walk(this.root);
  }

}

let tree = new bread();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
console.log(tree);
tree.breadFirst();
