// function version
function reverseList(listHead) {
  let node = listHead;
  let next = null;
  let prev = null;

  while(node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  // must return previous - because once the loop reaches the end, node will be set to the next of original tail
  // which is null
  return prev;
}