var removeNthFromfast = function(head, n) {
  let pre = {
    val:0,
    next:head
  };
  let slow=pre,fast = pre,i=0;

  while(n!=0){
    slow = slow.next;
    n--;
  }

  while(slow.next!=null){
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = fast.next.next;
  return pre.next;
};