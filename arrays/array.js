class ScratchArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // method for push
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  // method for pop
  pop() {
    let removedValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removedValue;
  }

  // method for shift
  shift() {
    removedValue = this.data[0];
    for(let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length -1];
    this.length--;
    return removedValue;
  }

  // method for unshift
  unshift(value) {
    for(let i = 0; i < this.length; i++) {
      this.data[i+1] = this.data[i];
    }
    this.data[0] = value;
    this.length++;
  }

  // method for get
  get(index) {
    return this.data[index];
  }

}