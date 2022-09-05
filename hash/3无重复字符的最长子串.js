var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  const n = s.length;

  let rk = - 1 , ans = 0;

  for(let i = 0 ; i < n ;i++){
    if(i!=0){
      occ.delete(s.charAt(i-1))
    }

    while(rk+1<n&&!occ.has(s.charAt(rk+1))){
      occ.add(s.charAt(rk+1));
      rk++;
    }

    ans = Math.max(ans,rk-i+1);
  }

  return ans;
};



// var lengthOfLongestSubstring = function(s) {
//   if(s.length==0)return 0;

//   let map = {},max=0;

//   for(let i=0,j=0 ; i < s.length ; ++i){
//     if(map[s.charAt(i)]!=undefined){
//       j = Math.max(j,map[s.charAt(i)]+1) //存在重复字母是查看头部是否需要进行更新
//     }
//     map[s.charAt(i)] = i;
//     max = Math.max(max,i-j+1);

//   }

//   return max
// };