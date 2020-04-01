'use strict';


const arr3 = [1, 2, [3, 4, [5, 6]]];
// [1, 2, 3, 4, 5, 6]

function flatten(array){
  let temp = [];
  while(array.length){
    console.log(array[0])
    if(!array[0].length){temp.push(array.shift())}

    if(typeof array[0] == 'object' ){
    while(array[0].length){
      temp.push(array[0].shift());
    }
    }
  }

  return temp
}


flatten(arr3);
