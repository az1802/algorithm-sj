var romanToInt = function(num) {
  let mArr = ["","M","MM","MMM"];
  let cArr = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let xArr = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let iArr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


  return mArr[toInt(num/1000)]+cArr[toInt(num%1000/100)]+xArr[toInt(num%100/10)]+iArr[num%10];
};

function toInt(num){
  return Math.floor(num)
}


console.log(romanToInt)