'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  add(key, value) {
    let hashValue = this.hash(key);
    if(!this.map[hashValue]) {this.map[hashValue] = [];}
    let resultObj = {};
    resultObj[key] = value;
    this.map[hashValue].push(resultObj);
  }
  hash(key) {
    return key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0)
    }, 0) * 599 % this.size;
  }
  
  get(key) {
    let hashKey = this.hash(key);
    for(let i = 0; i < this.map[hashKey].length; i++) {
      if(this.map[hashKey][i][key]) {return this.map[hashKey][i][key];}
    }
    return null;
  }

  contains(key) {
    let hashKey = this.hash(key);
    for(let i = 0; i < this.map[hashKey].length; i++) {
      if(this.map[hashKey][i][key]) {return true;}
    }
    return null;
  }


}

module.exports = HashTable;