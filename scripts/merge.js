'use strict';

function mergeSort (arr) {
  const half = arr.length / 2;
  if (arr.length < 2) return arr;
  return ( merge( mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, -1)) ) );
}

function merge (leftArr, rightArr) {
  let result = [];
  while (leftArr && rightArr) {
    result.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift());
  }
  if (leftArr) result.push(leftArr.shift());
  if (rightArr) result.push(rightArr.shift());
  return result;
}
module.exports = mergeSort;


// function mergeSort(arr) {
//   const half = arr.length / 2;
//   if (arr.length < 2) {
//     return arr;
//   }

//   const left = arr.splice(0, half);
//   return merge(mergeSort(left), mergeSort(arr));
// }
// function merge(left, right) {
//   let arr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }


//   return [...arr, ...left, ...right];

// }