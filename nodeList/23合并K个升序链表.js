var reverseKGroup = function(head, k) {
  if(!head || !head.next || !calcHeadLen(head,l)){
    return head;
  }
  let prev = null , cur = head,next = cur,n=k;

  while(n--&&cur){
    next = cur.next;
    cur.next= prev;
    prev = cur;
    cur = next;
    // next = cur&&cur.next;
  }
  head.next = reverseKGroup(cur,k)
  return prev
};


function calcHeadLen(head,k){
  if(!head){
    return false;
  }
  while(k--&&head){
    head = head.next;
  }

  return k == 0

}
