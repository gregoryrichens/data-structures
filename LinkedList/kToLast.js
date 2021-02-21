function kToLast(k, listHead) {
  // find length
  let length = 1;
  let currentNode = listHead;
  while(currentNode.next) {
    length++;
    currentNode = currentNode.next;
  }

  if (k > length) { throw new Error('list not long enough') }

  currentNode = listHead;

  for (let i = 0; i < length - k; i++){
    currentNode = currentNode.next;
  }

  return currentNode;
}