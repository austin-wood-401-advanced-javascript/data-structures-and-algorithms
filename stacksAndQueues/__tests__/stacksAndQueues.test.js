'use strict';

const stacksAndQueues = require('../stacksAndQueues.js');
const Stack = stacksAndQueues.Stack;
const Queue = stacksAndQueues.Queue;

describe('handles stack methods', () => {

  it('Can push things on to the stack', () =>{
    let stack = new Stack ();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek()
    expect(stack.peek()).toBe(15);
  });

  it('Can pop things off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(stack.pop())
  });

  it('can peek (it already can I used it for testing', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toBe(15)
  });
});

describe('handles queue methods', () => {

  it('Can create a queue', () => {
    let newQ = new Queue();
    expect(newQ.showQueue()).toStrictEqual([]);
  });

  it('Can enqueue', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    expect(newQ.showQueue()).toStrictEqual([1,2,3,4]);
  });

  it('Can dequeue', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    newQ.dequeue();
    expect(newQ.dequeue()).toStrictEqual(2);
  });

  it('peeks', () => {
    let newQ = new Queue();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    newQ.enqueue(4);
    expect(newQ.peek()).toBe(1);
  });

});

