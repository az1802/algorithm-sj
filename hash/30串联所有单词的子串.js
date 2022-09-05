var findSubstring = function(s, words) {
  let wordHashMap = {},wordLen = words[0].length ,strLen = words.length * wordLen,res=[];
  for(let i = 0 ; i < words.length;i++){
    wordHashMap[words[i]] = wordHashMap[words[i]] ? ++wordHashMap[words[i]] : 1;
  }


  for(let i = 0 ; i < s.length - strLen + 1 ; i++ ){
    let couuMap = Object.assign({},wordHashMap),flag = true;
    // console.log('couuMap: ', couuMap);
    for(let j = 0 ; j < strLen  ;j+=wordLen){
      let t =  s.slice(i+j,i+j+wordLen);
      if(couuMap[t]){
        couuMap[t]--
      }else{
        flag = false
        break;
      }
    }
    if(flag){
      res.push(i)
    }
  }
  return res;
};
