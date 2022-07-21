class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
      this.length = 1;
      return this.printList();
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this.printList();
  }

  dequeue() {
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this.printList();
  }

  peek() {
    if (!this.first) return null;
    return this.first.value;
  }

  printList() {
    let QueueArray = [];
    let currentNode = this.first;
    while (currentNode) {
      QueueArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return QueueArray;
  }
}

let myQueue = new Queue();
console.log(myQueue.enqueue(40));
console.log(myQueue.enqueue(25));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
