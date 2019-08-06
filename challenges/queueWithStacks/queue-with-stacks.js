'use strict';

'use strict' 


class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    //assign temp value;
    let temp = this.top;
    //reassign top to top.next
    this.top = this.top.next;
    //set old top.next = null;
    temp.next = null;
    //return this.top.value
    return temp.value;
  }
  
  peek() {
    return this.top;
  }

}

class PsudoQueue {

  constructor(){
    this.storage = new Stack;
    this.shuffle = new Stack;
  }

  enqueue(incoming){
    if(this.storage.peek() !==null){
      let temp = null;
      while(this.storage.peek() !== null) {
        temp = this.storage.pop();
        this.shuffle.push(temp);
      }
      this.storage.push(incoming);
      while(this.shuffle.peek() !== null){
        temp = this.shuffle.pop();
        this.storage.push(temp);
      }
    } else{
      this.storage.push(incoming);
    }
  }
  dequeue(){
    return this.storage.pop();
  }
}