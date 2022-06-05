// ? Defining Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//SinglyLinkedList
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Addes the new data to tail
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Removes  tail
  pop() {
    // we can check length=0
    if (!this.head) return "Plaese push the data!";
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //Removes from head
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //Addes element to start
  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Get method ->TO access element at a given index
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }

  //Idx=> index
  set(idx, val) {
    let foundnode = this.get(idx);
    if (!foundnode) return false;
    foundnode.val = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx == this.length) return !!this.push(val);
    if (idx == 0) return !!this.unShift(val);

    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push("Hai");
linkedList.push("hello");
linkedList.push("man");
linkedList.push("??");
linkedList.pop();
linkedList.shift();
linkedList.unShift("@");
linkedList.get(2); // we consider index from 0
linkedList.set(2, "set() is working ");
linkedList.insert(2, "insert()");
console.log(linkedList.get(3));
