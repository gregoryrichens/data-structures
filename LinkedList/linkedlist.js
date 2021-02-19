// class ListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // method for prepend
//   prepend(value) {
//     let newHead = new ListNode(value, this.head);
//     this.head = newHead;
//   }

//   // method for append
//   append(value) {
//     const newTail = new ListNode(value);
//     this.tail.next = newTail;
//     this.tail = newTail;
//   }

//   // method for get
//   get(index) {
//     // start at head
//     // move through whole list
//     // if value is found, return
//     let currentNode = this.head;
//     let currentIndex = 0;
//     while (currentNode) {
//       if(currentIndex === index) {
//         return currentNode;
//       } else {
//         currentNode = currentNode.next;
//         currentIndex++;
//       }
//     }
//     return null;
//   }

//   // method for insert at non tail or head
//   insert(index, value) {
//     let smallHead = this.get(index - 1);
//     let smallTail = smallHead.next;
//     smallHead.next = new ListNode(value, smallTail);
//   }

//   // method for delete head
//   deleteHead() {
//     this.head = this.head.next;
//   }

//   // method for delete tail
//   deleteTail() {
//     let currentNode = this.head;

//     while(currentNode) {
//       if (currentNode.next === null) {
//         return null;
//       }
//       if(currentNode.next.next === null) {
//         this.tail = currentNode;
//         currentNode.next = null;
//         return;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//   }

//   // method for delete non tail or head
//   delete(index) {
//     if (index === 0) {
//       this.deleteHead();
//       return;
//     }
//     let headLink;
//     this.get(index - 1) ? headLink = this.get(index - 1) : return null;
//     if(headLink.next === null) {
//       console.log('there is nothing to delete');
//       return null;
//     } else {
//       headLink.next = headLink.next.next;
//     }
//   }

// }

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
      if(!this.head) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;
  }
  shift(){
      if(!this.head) return undefined;
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if(this.length === 0){
          this.tail = null;
      }
      return currentHead;
  }
  unshift(val){
      var newNode = new Node(val);
      if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
  get(index){
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      var current = this.head;
      while(counter !== index){
          current = current.next;
          counter++;
      }
      return current;
  }
  set(index, val){
      var foundNode = this.get(index);
      if(foundNode){
          foundNode.val = val;
          return true;
      }
      return false;
  }
  insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);
      if(index === 0) return !!this.unshift(val);

      var newNode = new Node(val);
      var prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
  }
  remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      var previousNode = this.get(index - 1);
      var removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
