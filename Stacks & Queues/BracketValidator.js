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

function bracketValidator(string) {
  // object for openers
  let openers = new Set(['{','(','[']);
  let closers = new Set(['}', ')', ']']);
  let bracketMatch = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  // stack for openers
  let openerStack = new Stack();

  // iterate through string
  for (let i = 0; i < string.length; i++){
    // if opener, then push to the stack
    let character = string[i];
    if(openers.has(character)) {
      openerStack.push(character);
    } else if (closers.has(character)) {
      // if closer and it doesn't match stack return false
        // otherwise pop from stack
      if (bracketMatch[openerStack.peek()] !== character) { return false }
      openerStack.pop();
    }
  }

  // return length of stack === 0
  return openerStack.length === 0;
}