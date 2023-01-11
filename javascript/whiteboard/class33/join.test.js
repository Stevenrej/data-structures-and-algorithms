

const { leftJoin, HashTable } = require('./index');


const leftMap = new HashTable();
leftMap.set('1', 'apple');
leftMap.set('2', 'banana');
leftMap.set('3', 'orange');

const rightMap = new HashTable();
rightMap.set('1', 'red');
rightMap.set('2', 'yellow');

test('leftJoin returns an array', () => {
  expect(leftJoin(leftMap, rightMap)).toBeInstanceOf(Array);
});

test('leftJoin returns the correct number of elements', () => {
  expect(leftJoin(leftMap, rightMap).length).toBe(3);
});

test('leftJoin returns the correct result', () => {
  const expected = [['1', 'apple', 'red'], ['2', 'banana', 'yellow'], ['3', 'orange', null]];
  expect(leftJoin(leftMap, rightMap)).toEqual(expected);
});

test('leftJoin handles when right map is empty', () => {
  const emptyMap = new HashTable();
  expect(leftJoin(leftMap, emptyMap)).toEqual([['1', 'apple', null], ['2', 'banana', null], ['3', 'orange', null]]);
});

