class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        // ?This is to prevent the infinite loop , when we insert duplicates.
        if (val == currentNode.val) return false;
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(11);
bst.insert(9);
bst.insert(2);
bst.insert(3);
bst.insert(3);
console.log(bst.root);
