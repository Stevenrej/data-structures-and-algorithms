class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let node = new Node(animal);
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

  dequeue(pref) {
    if (this.front.value === null) { return 'null'; }
    if (pref !== 'cat' && pref !== 'dog') { return 'null'; }
    while (this.front.value !== pref) {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      console.log(temp.value);
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }
}


module.exports = AnimalShelter;
