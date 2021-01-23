'use strict';

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] <= arr[j - 1] && j > 0) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}

// function insertionSort(arr) {
//   let length = arr.length;
//   for (let i = 1; i < length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// };

// function insertionSort (arr) {

//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     if (current < arr[0]) {
//       arr.unshift(current);
//       arr.splice(i+1, 1);
//     }
//     else {
//       debugger
//       let j = 0;
//       while (j < i && arr[j] < current) {
//         j++;
//       }
//       arr.splice(j, 1, current);
//     }
//   }
//   return arr;
// }

module.exports = insertionSort;
