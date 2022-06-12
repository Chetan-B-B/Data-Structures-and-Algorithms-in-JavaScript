class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enQueue(val) {
    let newNode = new Node(val);
    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    return ++this.size;
  }

  deQueue() {
    if (!this.start) return null;
    let headNode = this.start;
    //we can also do like this.length
    if (this.start === this.end) {
      this.end = null;
    }
    this.start = this.start.next;
    console.log(this.start);
    this.size--;
    return headNode;
  }
}

let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
queue.deQueue();
queue.deQueue();
queue.deQueue();
console.log(queue);
