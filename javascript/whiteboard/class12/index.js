'use strict';

const AnimalShelter = require('./queue-shelter');

let queue = new AnimalShelter();

queue.enqueue('cat');
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');
console.log(queue.dequeue('dog'));
