'use strict';


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



class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    if(this.front===null){
      this.front = new Node(value,this.rear);
    } else{
      let temp = this.front;
      this.front = new Node(value,temp);
    }
  }

  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    return temp;
  }

  peek(){
    console.log('peeking the front: ',this.front);
    return this.front;
  }

}

let myQueue = new Queue;
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue);

module.exports = {Stack, Queue};