class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    const newNode = new Node(value);
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
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    let currentNode = this.traverseToIndex(index - 1);
    let headPointer = currentNode.next;
    newNode.next = headPointer;
    currentNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
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

let myLinkedList = new LinkedList(10);
myLinkedList.append(30);
myLinkedList.prepend(0);
myLinkedList.insert(2, 20);
myLinkedList.insert(0, -1);
myLinkedList.insert(5, 40);
myLinkedList.insert(6, 45);
myLinkedList.insert(3, 15);
myLinkedList.insert(0, -2);
myLinkedList.insert(9, 50);
myLinkedList.append(55);
myLinkedList.prepend(-3);
console.log(myLinkedList.printList());
myLinkedList.remove(12);

console.log(myLinkedList.printList());
