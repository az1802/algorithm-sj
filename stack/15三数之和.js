 /**
 * https://leetcode.cn/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
  var threeSum = function(nums) {
    let res = [] ,len = nums.length;
      if(len<3){
        return []
      }
      nums.sort((a,b)=>a-b);
     for(let i = 0 ; i < len-2 ; i++){
       if(nums[i]>0){
        return res;
       }
       if(i>0&&nums[i-1]==nums[i]){
        continue;
       }

       let l = i + 1,k = len-1;
       while(l < k){
        let temp = nums[i]+nums[l]+nums[k];
        if(temp==0){
          res.push([nums[i],nums[l],nums[k]]);
          l++;
          k--;
          while(nums[l]==nums[l-1]&&l<k){
            l++
          }
          while(nums[k]==nums[k+1]&&l<k){
            k--
          }

        }else if(temp < 0){
          l++;
        }else{
          k--;
        }
       }

     }

     return res;
  };



  console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))