const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  append(value) {

    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = new Node(value);
    this.tail = current.next;

  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;

    this.head = node;
    return this.head;
  }

  includes(value) {
    let current = this.head;

    while(current) {
      if (current.value === value) {
        console.log(true);
      } else {
        console.log(false);
      }

      current = current.next;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let output = '';

    while(current !== null) {
      output += current.value;
      current = current.next;
    }
    return console.log(output);
  }

  fromEnd(k){
    let current = this.head;
    let count = 0;
    while(current !== null){
      current = current.next;
      count++;
    }
    current = this.head;
    let nodeCompare = 0;
    while(current !== null){
      let target = count - k;
      nodeCompare++;
      if(target === nodeCompare){

        return current.value;
      }
      current = current.next;
    }
  }
  

}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

let listChecker = function(list){
  let array = [];
  let current = list.head;
  while(current !== null){
    if(current.next !== null){
      let p1 = current.value;
      let p2 = current.next.value;
      array.push(`Current: ${p1}`,`Next: ${p2}`);
    }
    current = current.next;
  }
console.log(array);
}

listChecker(list);
list.fromEnd(2);
