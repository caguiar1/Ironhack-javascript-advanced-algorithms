// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // enqueue function
  enqueue(element) {
    // adding element to the queue

    if(this.items.length == 10){
        return "Queue Overflow";
      }

    this.items.push(element);
  }

  // dequeue function
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) {
      return "Queue Underflow";
    }
    return this.items.shift();
  }

  // front function
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // isEmpty function
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  // printQueue function
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let queue = new Queue();

function QueueDataStructure() {}
