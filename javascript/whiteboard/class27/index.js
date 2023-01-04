'use strict';

function mergeSort(arr) {
  if (arr.length > 1) {
    const [left, right] = split(arr);
    return merge(mergeSort(left), mergeSort(right));
  }
  return arr;
}

function split(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}



module.exports = mergeSort;
