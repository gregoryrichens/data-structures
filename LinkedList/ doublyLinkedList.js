class Node{
  constructor(val){
      this.val = val
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(val){
      var node = new Node(val);
      if (this.head === null) {
          this.head = node;
          this.tail = this.head;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
      }
      this.length++;
      return this;
  }

  get(index) {
      let currentNode, count;
      // if the index is below zero or above existing indeces
      if (index < 0 || index >= this.length) { return null }
      // if closer to end
      if (index > this.length / 2) {
          currentNode = this.tail;
          count = this.length - 1;
          while(count !== index) {
              currentNode = currentNode.prev;
              count--;
          }
      }
      // if closer to beginning
      else {
          currentNode = this.head;
          count = 0;
          while(count !== index) {
              currentNode = currentNode.next;
              count++;
          }
      }
      return currentNode;
  }

  set(index, value){
      let nodeInQuestion = this.get(index);
      if(nodeInQuestion) {
          nodeInQuestion.val = value;
          return true;
      }
      return false;
  }
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        node.prev = next;
        prev = node;
        node = next
    }
    return this;
  }
}