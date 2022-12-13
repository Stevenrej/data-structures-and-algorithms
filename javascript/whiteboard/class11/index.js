let LinkedList = require('./LinkedList.js');
let { Pseudo} = require('./stackQueue.js');

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

let newQueue = new Pseudo();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.dequeue();

console.log(newQueue);





