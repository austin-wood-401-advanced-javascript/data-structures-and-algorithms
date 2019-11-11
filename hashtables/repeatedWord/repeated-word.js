'use strict';

function firstRepeat(bigStr) {
  let hashmap = new Array(1024).fill([]);
  let bigArr = bigStr.split(' ');
  for (let i = 0; i < bigArr.length; i++) {
    hasher(bigArr[i]);

    return bigArr;
  }
  function hasher(smStr) {
    let smArr = smStr.split('');
    let output = smArr.reduce((acc, val, idx) => {
      return acc + smStr.charCodeAt(idx);
    }, 0);

    let hash = (output * 599) % 1024;
    if (!checker(hash, smStr, hashmap)) {
      putter(hash, smStr, hashmap);
    }
    return smStr;
  }

  function checker(hash, smStr, hashmap) {
    let arr = hashmap[hash];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === smStr) {
        return true;
      }
    }
  }

  function putter(hash, smStr, hashmap) {
    hashmap[hash].push(smStr);
  }
}
firstRepeat('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');