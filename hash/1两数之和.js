var twoSum = function(nums, target) {
  let map = {},res=[];
  for (let i = 0; i < nums.length; i++) {

    let right = map[target-nums[i]]
    if(right!=undefined&&i!=right){
      res = i > right ? [right,i]:  [i,right];
      break;
    }
    map[nums[i]] = i;
  }


  return res
};


console.log(twoSum([3,3],6))