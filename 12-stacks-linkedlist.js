class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return undefined;
    this.top = this.top.next;
    this.length--;
    if (!this.length) this.bottom = null;
    return this;
  }

  peek() {
    if (!this.top) return undefined;
    return this.top.value;
  }
}

let myStack = new Stack();
console.log(myStack.push(40));
console.log(myStack.push(25));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
