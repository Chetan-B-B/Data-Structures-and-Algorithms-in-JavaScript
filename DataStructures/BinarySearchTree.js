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

  //Approach one
  // search(val) {
  //   if (!this.root) return false;
  //   let current = this.root;
  //   while (true) {
  //     if (val == current.val) return true; // avoid infinite loop
  //     if (val < current.val) {
  //       if (!current.left) return false;
  //       if (current.left.val === val) return true;
  //       current = current.left;
  //     } else if (val > current.val) {
  //       if (!current.right) return false;
  //       if (current.right.val === val) return true;
  //       current = current.right;
  //     }
  //   }
  // }

  //Approach 2
  search(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return found;
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
console.log(bst.search(10));
console.log(bst.search(3));
console.log(bst.search(1));
console.log(bst.root);
