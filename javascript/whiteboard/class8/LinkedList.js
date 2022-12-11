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

  add(value) {
    const node = new Node(value);
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
  merge(list, list2) {


    let list3 = new LinkedList();
    let prev = list3;


    while (list !== null && list2 !== null) {
      if (list.value <= list2.value) {
        prev.next = list;
        list = list.next;
      } else {
        prev.next = list2;
        list2 = list2.next;
      }
      prev = prev.next;
    }




    if (list === null) { prev.next = list2; }
    if (list2 === null) { prev.next = list; }

    console.log(list3);
    return list3.next;

  }
}

module.exports = LinkedList;
