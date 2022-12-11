'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  nthFromLast(k) {
    let len = 0;
    let temp = this.head;
    while (temp !== null) {
      temp = temp.next;
      len++;
    }
    if (len < k)
      return;

    temp = this.head;

    for (let i = 1; i < len - k; i++) {
      temp = temp.next;
    }
    return temp.value;
  }
}

module.exports = LinkedList;
