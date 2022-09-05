/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let left = 0 ,right =0,max=0 ;
  for(let i = s.length-1 ; i > -1;i--){
    s[i] == "(" ? left++ : right++;
    if(right < left){
      left = right = 0;
    }else if(left == right){
      max = Math.max(max,left*2)
    }
  }
  left = right = 0
  for(let i =0  ; i < s.length;i++){
    s[i] == "(" ? left++ : right++;
    if(right > left){
      left = right = 0;
    }else if(left == right){
      max = Math.max(max,left*2)
    }
  }

  return  max
};