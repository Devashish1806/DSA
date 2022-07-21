function isValidBST(root) {
  let queue = [root];
  while (queue.length) {
    let currentNode = queue.shift();
    if (currentNode.left) {
      if (currentNode.left.val >= currentNode.val) return false;
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      if (currentNode.right.val <= currentNode.val) return false;
      queue.push(currentNode.right);
    }
  }
  return true;
}
