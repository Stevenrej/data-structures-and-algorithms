'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const LinkedList = require('../LinkedList');

describe('Linked List', () => {
  let list = new LinkedList();
  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toEqual(null);
  });

  it('accepts new nodes as expected', () => {
    list.add('a');
    list.add('b');
    list.add('c');
    list.add('d');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });


  it('Where k is greater than the length of the linked list', () => {

    expect(list.nthFromLast(180)).toEqual(undefined);
  });


  it('Where the linked list is of a size 1', () => {
    const lengthOfOne = new LinkedList();
    lengthOfOne.add('q');

    expect(lengthOfOne.nthFromLast(0)).toEqual('q');
  });

  it('find nth from last node', () => {
    expect(list.nthFromLast(2)).toEqual('b');
  });
});
