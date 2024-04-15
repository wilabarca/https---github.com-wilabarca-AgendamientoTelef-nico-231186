import{Node} from'./Node.js'
export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(element) {
    let newNode = new Node(element);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }

    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    let removedElement = this.front.element;
    this.front = this.front.next;
    this.size--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    return removedElement;
  }

  isEmpty() {
    return this.size === 0;
  }

  printQueue() {
    let current = this.front;
    let result = '';

    while (current) {
      result += current.element + '\n';
      current = current.next;
    }

    return result;
  }
}