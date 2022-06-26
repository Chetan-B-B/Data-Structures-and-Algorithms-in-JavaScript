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

  //BFs and Dfs are not only applied to Binary search tree they can be applied to other trees also
  // ? Breadth first search
  bfs() {
    let queue = [], // push() and shift()
      visted = [], //it's array , push and pop
      vistedNode = this.root;
    queue.push(vistedNode);
    while (queue.length) {
      vistedNode = queue.shift();
      visted.push(vistedNode.val); // You could push an entire node

      if (vistedNode.left) queue.push(vistedNode.left);
      if (vistedNode.right) queue.push(vistedNode.right);
    }
    return visted;
  }

  dfsPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      //   if (!node) return undefined;
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  dfsPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      //   if (!node) return undefined;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }
  dfsInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      //   if (!node) return undefined;
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
bst.insert(20);
console.log(bst.search(10));
console.log(bst.search(3));
console.log(bst.search(1));
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
console.log(bst.root);
