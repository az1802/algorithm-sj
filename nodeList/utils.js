function Node(val){
  return {
    val,
    next:null,
    prev:null
  }
}



function arrToNodeList(arr){
  let head = null,cur=null;
    if(!arr.length){
      return null;
    }
    head = Node(arr[0]);
    cur = head;

  for(let i = 1 ; i < arr.length ;i++){
    cur.next = Node(arr[i])
  }

  return head;
}



function NodeListToArr(head){
    let arr = [];

    let cur = head;
    while(cur.next!==null){
      arr.push(cur.val);
      cur = cur.next;
    }

    return arr;
}


function calcNodeListLen(head){
  let len = 0 ,cur = head;
  while(cur!=null){
    cur = cur.next;
    len++;
  }

  return len;
}



module.exports =  {
  Node,
  arrToNodeList,
  NodeListToArr,
  calcNodeListLen
}
