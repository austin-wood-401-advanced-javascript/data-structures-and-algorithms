// const util = require('util');

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
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.next) {
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

    while (current) {
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
    let output = "";

    while (current !== null) {
      output += current.value;
      current = current.next;
    }
    return console.log(output);
  }

  insertBefore(value, target) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while (current.next.value !== target) {
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }

  insertAfter(value, target) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while (current.value !== target) {
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }

  fromEnd(k) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      current = current.next;
      count++;
    }
    current = this.head;
    let nodeCompare = 0;
    while (current !== null) {
      let target = count - k;
      nodeCompare++;
      if (target === nodeCompare) {
        return current.value;
      }
      current = current.next;
    }
  }

  mergeLists(list1, list2) {
    let zippedList = new LinkedList();
    let currentOne = list1.head;
    let currentTwo = list2.head;
    let countOne = 0;
    let countTwo = 0;
    while (currentOne !== null) {
      countOne++;
      currentOne = currentOne.next;
    }
    while (currentTwo !== null) {
      countTwo++;
      currentTwo = currentTwo.next;
    }
    currentOne = list1.head;
    currentTwo = list2.head;
    if (countOne >= countTwo) {
      while (currentOne.next) {
        let nextOne = currentOne.next;
        let nextTwo = currentTwo.next;
        currentOne.next = currentTwo.value;
        zippedList.append(currentOne);
        currentTwo.next = nextOne;
        zippedList.append(currentTwo);
        console.log('one:',currentOne.value, 'one next:',currentOne.next.value);
        console.log('two:',currentTwo.value, 'two next: ',currentTwo.next.value);
        currentOne = nextTwo;
        currentTwo = nextOne;
        console.log('HALP:',zippedList);
      }
      return zippedList;
    } else{
      while (currentOne !== null || currentTwo !== null){
        let nextOne = currentOne.next;
        let nextTwo = currentTwo.next;
        currentTwo.next = currentOne.value;
        zippedList.append(currentTwo);
        currentOne.next = nextTwo;
        zippedList.append(currentOne);
        currentOne = nextOne;
        currentTwo = nextTwo;
      } return zippedList;}
  }

  reversed(){
    let previous= null;
    let current = this.head;
    let next = null;
    while(current !== null ){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  }
}

let listChecker = function(list) {
  let array = [];
  let current = list.head;
  while (current !== null) {
    if (current.next !== null) {
      let p1 = current.value;
      let p2 = current.next.value;
      array.push(`Current: ${p1}`, `Next: ${p2}`);
    }
    current = current.next;
  }
  console.log(array);
};

let list1 = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);
list1.append(6);

module.exports = { LinkedList };
