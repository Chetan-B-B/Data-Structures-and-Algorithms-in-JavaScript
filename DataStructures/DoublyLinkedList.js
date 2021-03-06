class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // We can also check for tail | head | length = 0
    if (!this.head) return undefined;
    let removedNode = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null; //This is to remove the link from last to its prev ex: 10 , 20, 30 if we pop() then we need to revove link from 30 to 20 (backward link) otherwise using the poped element anyone can access the entire list itself .For safer side we need to remove that link.
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let current, count;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return undefined;
    foundNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx == 0) return !!this.push(val);
    if (idx == this.length) this.unshift(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  delete(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx == 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    // let prevNode = this.get(idx - 1);
    // let nextNode = this.get(idx + 1);
    // prevNode.next = nextNode;
    // nextNode.prev = prevNode;

    //or

    let removedNode = this.get(idx);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const dll = new DoublyLinkedList();
dll.push(2);
dll.push(4);
dll.push(8);
dll.push(10);
dll.push(12);
dll.pop();
// console.log(dll.shift());
dll.unshift(2);
// console.log(dll.get(3));
// console.log(dll.set(3, 11));
console.log(dll.insert(1, 3));
console.log(dll.get(1));
console.log(dll.delete(1));
console.log(dll);

//Big O for Dll
//insertion -> O(1)
//deletion -> O(1)
//Access -> O(n)
//Searching -> O(n)
