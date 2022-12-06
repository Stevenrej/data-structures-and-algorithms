'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  include(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }


  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }


  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        return;
      }
      return current;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        return;
      }
      return current;
    }
  }


}

let list = new LinkedList();
list.include('a');
list.include('b');
list.include('c');


list.toString();

module.exports = LinkedList;
