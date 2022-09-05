
// https://leetcode.com/problems/add-two-numbers/discuss/1010/Is-this-Algorithm-optimal-or-what


var addTwoNumbers = function(l1, l2) {
  let prev = {
   val:0,
   next:null
  },cur = prev;
  let carry = 0 ;


  while(l1!=null || l2 !=null){
    let x = l1 == null ? 0  : l1.val;
    let y = l2 == null ? 0  : l2.val;
    let sum = x+y+carry;

    carry = Math.floor(sum/10);
    sum = sum%10;
    cur.next = {
     val:sum,
     next:null
    }
    cur=cur.next

    if(l1 !=null){
      l1 = l1.next
    }
    if(l2 != null){
     l2 = l2.next
    }
  }
  if(carry){
   cur.next = {
     val:carry,
     next:null
   }
  }



  return prev.next;

 };



 // console.log(arrToNodeList([9,9,9]),arrToNodeList([9,9,9,9,9]))

 console.log(
   addTwoNumbers(
     arrToNodeList([2,4,3]),
     arrToNodeList([5,6,4])
   ))

 function Node(val){
   return {
     val,
     next:null,
     prev:null
   }
 }

 function arrToNodeList(arr){
   console.log('arr: ', arr);
     if(!arr.length){
       return null;
     }
   let head = Node(arr[0]),cur=head;

   for(let i = 1 ; i < arr.length ;i++){
     cur.next = Node(arr[i]);
     cur = cur.next;
   }

   return head;
 }



 function calcNodeListLen(head){
   let len = 0 ,cur = head;
   while(cur!=null){
     cur = cur.next;
     len++;
   }

   return len;
 }
