/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

class ListNode {
  constructor(key, value, next = null) {
    this.key = key;
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
  prepend(key, value) {
    let newHead = new ListNode(key, value, this.head);
    this.head = newHead;
  }

  // method for append
  append(key, value) {
    const newTail = new ListNode(key, value);
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
  insert(index, key, value) {
    let smallHead = this.get(index - 1);
    let smallTail = smallHead.next;
    smallHead.next = new ListNode(key, value, smallTail);
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

class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = [];
  }

  // method to add
  add (key, value) {
    let hash = getIndexBelowMaxForKey(key, this.size);
    // at the given index, add to the linked list
    if (this.storage[hash] === undefined) {
      this.storage[hash] = new LinkedList;
      this.storage[hash].head = new ListNode(key, value);
      return;
    } else {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        // if it matches upsert
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }
        // if the next node is
        if (currentNode.next === null) {
          currentNode.append(key, value);
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
  // method to remove

  // method to retrieve given key
  get(key) {
    let hash = getIndexBelowMaxForKey(key);
    if (this.storage[hash] === undefined) {
      return null;
    }
    let currentNode = this.storage[hash];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //method to resize
  // add checks to end of add and remove

};
