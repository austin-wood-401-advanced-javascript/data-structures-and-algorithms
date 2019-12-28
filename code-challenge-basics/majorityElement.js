'use strict';

let array = [1,1,5,8,4,,4,4,11,2,2,3];

const majorityElement = function(nums) {
    let hashMap = new Map()
    let highest = {number:0, count:0};
    let temp;
    
    for( let i =0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
          temp = hashMap.get(nums[i])  + 1;
            hashMap.set(nums[i],temp)
        }else{
            hashMap.set(nums[i],1)
        }
        if(hashMap.get(nums[i]) > highest.count){
          highest.count = hashMap.get(nums[i])
            highest.number = nums[i]
        }
    }
  return highest.number;  
    
};


majorityElement(array)
