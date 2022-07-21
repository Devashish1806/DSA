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

  breadthFirstSearch() {
    let list = [];
    let queue = [this.root];

    while (queue.length) {
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  recursiveBreadthFirstSearch(queue, list) {
    if (!queue.length) return list;
    while (queue.length) {
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return this.recursiveBreadthFirstSearch(queue, list);
  }
}

let tree = new BinarySearchTree();

console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(JSON.stringify(tree));
console.log("9: ", tree.lookup(9));
console.log("4: ", tree.lookup(4));
console.log("6: ", tree.lookup(6));
console.log("20: ", tree.lookup(20));
console.log("3: ", tree.lookup(3));
console.log("10: ", tree.lookup(10));
console.log("5: ", tree.lookup(5));
console.log("0: ", tree.lookup(0));
console.log("BFS: ", tree.breadthFirstSearch());
console.log(
  "BFS Recursive: ",
  tree.recursiveBreadthFirstSearch([tree.root], [])
);
