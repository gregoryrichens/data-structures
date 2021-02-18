class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// naive solution
class Queue {
  constructor() {
    this.storageStack = new Stack();
    this.popStack = new Stack();
  }

  enqueue(item) {
    this.storageStack.push(item);
  }

  dequeue(item) {
    for (let i = this.storageStack.length; i > 0; i--){
      this.popStack.push(this.storageStack.pop());
    }
    let dequeuedItem = this.popStack.pop();

    for (let j = this.popStack.length; j > 0; j--){
      this.storageStack.push(this.popStack.pop());
    }

    return dequeuedItem;
  }
}