class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // method for prepend
  prepend(value) {
    let newHead = new ListNode(value, this.head);
    this.head = newHead;
  }

  // method for append
  append(value) {
    const newTail = new ListNode(value);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  // method for get
  get(index) {
    // start at head
    // move through whole list
    // if value is found, return
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if(currentIndex === index) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
    return null;
  }

  // method for insert at non tail or head
  insert(index, value) {
    let smallHead = this.get(index - 1);
    let smallTail = smallHead.next;
    smallHead.next = new ListNode(value, smallTail);
  }

  // method for delete head
  deleteHead() {
    this.head = this.head.next;
  }

  // method for delete tail
  deleteTail() {
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.next === null) {
        return null;
      }
      if(currentNode.next.next === null) {
        this.tail = currentNode;
        currentNode.next = null;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // method for delete non tail or head
  delete(index) {
    if (index === 0) {
      this.deleteHead();
      return;
    }
    let headLink;
    this.get(index - 1) ? headLink = this.get(index - 1) : return null;
    if(headLink.next === null) {
      console.log('there is nothing to delete');
      return null;
    } else {
      headLink.next = headLink.next.next;
    }
  }

}