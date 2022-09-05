// 11 盛最多的水 https://leetcode.cn/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let start = 0 ,end = height.length - 1,maxArea = 0;
  while(start != end){
     maxArea = Math.max(maxArea,area(height,start,end));
     height[start] > height[end] ? end-- : start++
  }
  return maxArea;
};

function area(height,a,b){
 return Math.abs(b - a)*Math.min(height[b],height[a]);
}



console.log(maxArea([1,8,6,2,5,4,8,3,7]))