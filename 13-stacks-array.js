class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value)
    return this.array;
  }

  pop() {
    this.array.pop();
    return this.array;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

let myStack = new Stack();
console.log(myStack.push(40));
console.log(myStack.push(25));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
