/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let returnArray = [];

   for (let i = 0; i < nums.length; i+=1) {
      for (k = 0; k < nums.length; k+=1) {
          if (k !== i) {
            if ((nums[i] + nums[k]) === target) {
                returnArray = [i, k];
                break;
            }
          }
      }
    
   }

   return returnArray;
};

console.log(twoSum([3,2,3], 6));