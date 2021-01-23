'use strict';

function selectionSort (arr) {
  // selectionSort works by iterating through the unsorted array and finds the minimum value
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}
// [1,2,6,2,5]
module.exports = selectionSort;
