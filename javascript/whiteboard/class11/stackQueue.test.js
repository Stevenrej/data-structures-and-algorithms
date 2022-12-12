'use strict';

const { Stack, Queue } = require('./stackQueue');

describe('Stack', () => {
  let newStack = new Stack();

  it('Can successfully instantiate an empty Stack', () => {
    let stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('Can successfully push onto a stack', () => {
    newStack.push(1);
    expect(newStack.top.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    newStack.push(2);
    newStack.push(3);
    expect(newStack.top.value).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    newStack.pop();
    expect(newStack.top.value).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    newStack.pop();
    newStack.pop();

    expect(newStack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    newStack.push(1);

    expect(newStack.peek()).toEqual(1);
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    newStack.pop();

    expect(newStack.pop()).toEqual('null');
    expect(newStack.peek()).toEqual('null');
  });
});

describe('Queue', () => {
  let newQueue = new Queue();

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('Can successfully enqueue into a queue', () => {
    newQueue.enqueue(1);
    expect(newQueue.front.value).toEqual(1);
    expect(newQueue.rear).toEqual(newQueue.front);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.rear.value).toEqual(3);
  });

  it('Can successfully dequeue out of a queue', () => {
    newQueue.dequeue();
    expect(newQueue.front.value).toEqual(2);
    expect(newQueue.rear.value).toEqual(3);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.isEmpty()).toEqual(true);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    newQueue.enqueue(1);
    expect(newQueue.peek()).toEqual(1);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    newQueue.dequeue();

    expect(newQueue.dequeue()).toEqual('null');
    expect(newQueue.peek()).toEqual('null');
  });
});
