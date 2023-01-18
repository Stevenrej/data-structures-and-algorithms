const { LinkedList, removeNode } = require('./removeNode');

describe('removeNode', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
  });

  it('removes head', () => {
    removeNode(list, 1);
    expect(list.head.value).toBe(2);
  });

  it('removes middle node', () => {
    removeNode(list, 2);
    let current = list.head;
    while (current.next.value !== 3) {
      current = current.next;
    }
    expect(current.next.value).toBe(3);
  });

  it('removes tail', () => {
    removeNode(list, 4);
    let current = list.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.value).toBe(3);
  });

  it('removes non-existing node', () => {
    removeNode(list, 5);
    let current = list.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    expect(count).toBe(4);
  });
});

