'use strict';


let nums = [0,0,1];

var moveZeroes = function(nums) {
    
    for(let i=0; i < nums.length; i ++) {
        
        if( nums[i] === 0){
            
        for(let k = i; k < nums.length; k ++){
            nums[k]=nums[k+1]
        }
            nums[nums.length-1] = 0
        }
    }
        for(let i=0; i < nums.length; i ++) {
        
        if( nums[i] === 0){
            
        for(let k = i; k < nums.length; k ++){
            nums[k]=nums[k+1]
        }
            nums[nums.length-1] = 0
        }
    }
    return nums
};

moveZeroes(nums);

