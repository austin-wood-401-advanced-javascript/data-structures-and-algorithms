'use strict';

let stacksAndQueues = require('../stacksAndQueues/stacksAndQueues.js');
let myQueue = stacksAndQueues.Queue;

class AnimalShelter{
  constructor(){
    this.dogQ = new myQueue;
    this.catQ = new myQueue;
  }

  enqueue(animal){
    if(animal.species === 'dog') {
      this.dogQ.enqueue(animal);
      return true;
    } if(animal.species === 'cat') {
      this.catQ.enqueue(animal);
      return true;
    } else {
      return null;
    }
  }

  dequeue(pref){
    if(pref === 'dog') {
      return this.dogQ.dequeue();
    } if(pref === 'cat') {
      return this.catQ.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;