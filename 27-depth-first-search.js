class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > newNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value == value) return true;
      else if (currentNode.value < value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  inOrderDepthFirstSearch() {
    return this.inOrderTraverse(this.root, []);
  }

  inOrderTraverse(currentNode, list) {
    if (currentNode.left) this.inOrderTraverse(currentNode.left, list);
    list.push(currentNode.value);
    if (currentNode.right) this.inOrderTraverse(currentNode.right, list);
    return list;
  }

  preOrderDepthFirstSearch() {
    return this.preOrderTraverse(this.root, []);
  }

  preOrderTraverse(currentNode, list) {
    list.push(currentNode.value);
    if (currentNode.left) this.preOrderTraverse(currentNode.left, list);
    if (currentNode.right) this.preOrderTraverse(currentNode.right, list);
    return list;
  }

  postOrderDepthFirstSearch() {
    return this.postOrderTraverse(this.root, []);
  }

  postOrderTraverse(currentNode, list) {
    if (currentNode.left) this.postOrderTraverse(currentNode.left, list);
    if (currentNode.right) this.postOrderTraverse(currentNode.right, list);
    list.push(currentNode.value);
    return list;
  }
}

let tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log("InOrder DFS: ", tree.inOrderDepthFirstSearch());
console.log("PreOrder DFS: ", tree.preOrderDepthFirstSearch());
console.log("PostOrder DFS: ", tree.postOrderDepthFirstSearch());
