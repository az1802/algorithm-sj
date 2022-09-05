/**
 * https://leetcode.cn/problems/swap-nodes-in-pairs/submissions/
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function genNodeList(n){
  if(n==0){return null}
  let head = {
    val:0,
    next:null
  },prev=head;
  for(let i = 1 ; i < n ; i++){
    let node = {
      val:i,
      next:null
    }
    prev.next = node;
    prev = node
  }

  return head;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  if(!head || !head.next){
    return head;
  }
 let next = head.next;
 head.next = swapPairs(next.next);
 next.next = head;
 return next;
};





console.log(swapPairs(genNodeList(3)))
console.log('genNodeList(2): ', genNodeList(3));