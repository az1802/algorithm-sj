/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let num = 0 ;
  for(let i = 0 ; i < nums.length ;i++){
    if(nums[i]==0){
     num++;
    }else{
     nums[i-num] = nums[i];
    }
  }
  for(let i = nums.length - 1 ; i >= nums.length - num ;i--){
   nums[i] = 0
  }
  return nums;
};

console.log(moveZeroes([0]))