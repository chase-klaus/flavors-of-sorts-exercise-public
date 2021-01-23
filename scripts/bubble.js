'use strict';

function bubbleSort (arr) {
  //We pass through the array and swap elements to the right. This means we'll have the largest index at the end of each pass
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
}

module.exports = bubbleSort;
