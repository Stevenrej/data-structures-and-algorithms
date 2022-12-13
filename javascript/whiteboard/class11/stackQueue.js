'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top === null) { return 'null'; }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.top === null) { return 'null'; }
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      return this.rear = node;
    }
    if (this.rear === this.front) {
      this.rear = node;
      return this.front.next = this.rear;
    }
    this.rear.next = node;
    this.rear = this.rear.next;
  }

  dequeue() {
    if (this.front === null) { return 'null'; }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.front === null) { return 'null'; }
    return this.front.value;
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Pseudo {
  constructor() {
    this.front = null;
    this.back = null;
    this.count = 0;
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  enqueue(x) {
    while (this.s1.top) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(x);
    this.back = x;
    this.front = x;

    if(this.s2.top) {
      let temp = this.s2.top;
      this.s1.push(temp);
      this.front = temp;
    }
  }

  dequeue() {
    if (this.s1.top === null) {
      console.log('queue is empty');
      return;
    }

    if (this.s1.top.next === null) {
      this.back = null;
      return;
    }

    if (this.s1.top) {
      this.front = this.s1.top.next;
      let result =this.s1.pop();
      return result;
    }
  }
}

module.exports = { Stack, Queue, Pseudo };
