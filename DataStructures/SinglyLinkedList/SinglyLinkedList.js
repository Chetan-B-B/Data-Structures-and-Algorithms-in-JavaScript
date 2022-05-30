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
}

let linkedList = new SinglyLinkedList();
linkedList.push("Hai");
linkedList.push("hello");
linkedList.push("man");
linkedList.push("??");
linkedList.pop();
linkedList.shift();
console.log(linkedList);
