class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enQueue(newValue) {
    const newNode = new Node(newValue);
    if (this.size === 0) {
      this.head = this.tail = newNode;
      this.size += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
    }
  }
  deQueue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
}
