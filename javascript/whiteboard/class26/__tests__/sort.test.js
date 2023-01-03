const insertionSort = require('../index');


describe('insertionSort', () => {
  it('should sort an array in ascending order', () => {
    const arr = [5, 2, 8, 1, 9, 3, 4, 6, 7];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const arr = [5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([5]);
  });

  it('should handle a sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle a reversed array', () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
