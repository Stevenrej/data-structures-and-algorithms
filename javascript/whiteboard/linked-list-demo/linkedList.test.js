'use strict';

const LinkedList = require('./linkedList');

describe('Linked List', () => {
  let list = new LinkedList();
  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toEqual(null);
  });

  it('accepts new nodes as expected', () => {
    list.include('a');
    list.include('b');
    list.include('c');
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
 it ('Can properly insert into the linked list', () => {
  list.insert('g');
  expect(list.head.value).toEqual('g');
 });
});


// Can successfully instantiate an empty linked list

// Can properly insert into the linked list

// The head property will properly point to the first node in the linked list

// Can properly insert multiple nodes into the linked list

// Will return true when finding a value within the linked list that exists

// Will return false when searching for a value in the linked list that does not exist

// Can properly return a collection of all the values that exist in the linked list

//  it('Will return false when searching for a value in the linked list that does not exist', () => {
// expect(list.head.next.next.next.next.value).toEqual(null);
//  });

// it('Can properly return a collection of all the values that exist in the linked list', () => {
//   list.toString();
//   expect(LinkedList.log).toEqual('a')
//   });
