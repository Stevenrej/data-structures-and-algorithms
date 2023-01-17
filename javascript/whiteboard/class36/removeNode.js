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

function removeNode(list, value) {
  let removedValue;
  if (list.head.value === value) {
    removedValue = list.head.value;
    list.head = list.head.next;
    return removedValue;
  }

  let current = list.head;
  while(current.next !== null) {
    if (current.next.value === value) {
      removedValue = current.next.value;
      current.next = current.next.next;
      return removedValue;
    }
    current = current.next;
  }
}





let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);



console.log(removeNode(list, 4));
console.log(list);



module.exports = {
  LinkedList,
  removeNode,
};
