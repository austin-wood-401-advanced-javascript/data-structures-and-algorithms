'use strict';

const stacksAndQueues = require('../stacksAndQueues.js');
const stack = stacksAndQueues.Stack;
const queue = stacksAndQueues.Queue;

describe('handles stack methods', () => {

  it('can push', () => {
  });

  it('can push multiples', () => {

  });

  it('can pop', () => {

  });

  it('can empty a stack with multiple pops', () => {

  });

  it('can peek', () => {

  });

  it('can make an empty stack', () =>{

  });
});

describe('handles queue methods', () => {

  it('Can instantiate a queue', () => {
    let newQ = new queue;
  });

  it('Can enqueue things', () => {
    let newQ = new queue;
    newQ.enqueue(5);
    newQ.enqueue(10);
    newQ.enqueue(15);
    newQ.enqueue(20);
    let peeked = newQ.peek();
    expect(peeked.toStrictEqual(20));
  });

  it('Can dequeue things', () => {
    let newQ = new stacksAndQueues.Queue();
    newQ.enqueue(5);
    newQ.enqueue(10);
    newQ.enqueue(15);
    newQ.dequeue();
    expect(newQ.peek().value.toEqual(10));
  });

  it('peeks correctly', () => {
    let newQ = new stacksAndQueues.Queue();
    newQ.enqueue(5);
    newQ.enqueue(10);
    expect(newQ.peek()).toBe(5);
  });
  
  it('can empty a queue with multiple dequeues', ()=> {
    let newQ = new stacksAndQueues.Queue();
    newQ.enqueue(5);
    newQ.enqueue(10);
    newQ.dequeue();
    newQ.dequeue();
    expect(newQ.peek().toBe(null));
  });

  xit('can make an empty queue', ()=> {
    let newQ = new stacksAndQueues.Queue();
    expect(newQ.peek().toBe(null));
  });
});

