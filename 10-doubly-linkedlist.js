class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    currentNode.next.prev = currentNode;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
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

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(30);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(2, 20);
myDoublyLinkedList.insert(0, -1);
myDoublyLinkedList.insert(5, 40);
myDoublyLinkedList.insert(6, 45);
myDoublyLinkedList.insert(3, 15);
myDoublyLinkedList.insert(0, -2);
myDoublyLinkedList.insert(9, 50);
myDoublyLinkedList.append(55);
myDoublyLinkedList.prepend(-3);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList.printList());
