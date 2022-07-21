class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse() {
    if (!this.head.next) return this;
    let firstNode = this.head;
    let secondNode = firstNode.next;
    this.tail = firstNode;
    while (secondNode) {
      let temp = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }
    this.tail.next = null;
    this.head = firstNode;
    return this;
  }

  printList() {
    const arrayList = [];
    let currentNode = this.head;
    while (currentNode) {
      arrayList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrayList;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(0);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
