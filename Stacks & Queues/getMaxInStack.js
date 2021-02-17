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

class MaxStack {
  constructor() {

    // Initialize an empty stack
    this.items = new Stack();
    this.max = new Stack();
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
    if(!this.max.peek()) {
      this.max.push(item);
    } else if (item >= this.max.peek()){
      this.max.push(item);
    }
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)

    if (this.items.peek() === this.max.peek()) { this.max.pop() }

    return this.items.pop();
  }

  getMax() {
    return this.max.peek();
  }
}