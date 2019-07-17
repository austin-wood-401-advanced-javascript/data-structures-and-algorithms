'use strict'

const linkedList = require('../linked-list.js');
 

describe('K from the end tests'), () => {
  it(' K is not greater than the length of the linked list ', () => {
    let list = new linkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.listChecker(list);
  });
};

