class Node{
  constructor(val){
      this.val = val
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        let prevTail = this.tail;
        this.tail = newNode;
        prevTail.next = this.tail;
        this.tail.prev = prevTail;
    }
    this.length++;
    return this;
  }
  unshift(val){
    let newNode = new Node(val);
    if(this.length === 0) {
        return this.push(val);
    } else {
        let oldHead = this.head;
        oldHead.prev = newNode;
        newNode.next = oldHead;
        this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift(){
    let returnNode = this.head;
    if (this.length === 0) { return undefined }
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
    this.length--;
    returnNode.next = null;
    return returnNode;
  }
}
