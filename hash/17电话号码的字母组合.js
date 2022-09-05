/**
 * @param {string} s
 * @return {number}
 */
 var letterCombinations = function(digits) {
  if(digits.length==0){return []}

  let map = {
   2:"abc",
   3:"def",
   4:"ghi",
   5:"jkl",
   6:"mno",
   7:"pqrs",
   8:"tuv",
   9:"wxyz"
  }

  let res = [""]

  for(let i = 0 ; i < digits.length ; i++){
    let num = digits[i];
    let str = map[num];
    while(res[0].length==i){
      let t = res.shift();
      for(let j = 0 ; j < str.length;j++){
        res.push(t+str[j])
      }
    }
  }

  return res;

};
