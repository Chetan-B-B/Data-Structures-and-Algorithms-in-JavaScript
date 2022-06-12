class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }
    return this.size++;
  }

  pop() {
    if (!this.start) return null;
    let headNode = this.start;
    //we can also do like this.length
    if (this.start === this.end) {
      this.end = null;
    }
    this.start = this.start.next;
    this.size--;
    console.log(this.start);
    return headNode;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

//Big O for stack
//insertion -> O(1)
//deletion -> O(1)
//Access -> O(n)
//Searching -> O(n)
