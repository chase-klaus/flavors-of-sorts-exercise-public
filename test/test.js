'use strict';

require('chai').should();

const mocks = require('./mocks.js');
const insertionSort = require('../scripts/insertion.js');
const selectionSort = require('../scripts/selection.js');
const bubbleSort = require('../scripts/bubble.js');
const mergeSort = require('../scripts/merge.js');
const mergeSortInPlace = require('../scripts/mergeInPlace.js');
const quickSort = require('../scripts/quick.js');

describe('Sorting algorithms', function () {

  let randomArr;
  let sortedArr;

  beforeEach(function () {
    randomArr = mocks.randomArr.slice();
    sortedArr = mocks.sortedArr.slice();
  });

  describe('Insertion sort', function () {

    it('should sort the array in place', function () {
      insertionSort(randomArr);
      randomArr.should.eql(sortedArr);
    });

  });

  describe('Selection sort', function () {

    it('should sort the array in place', function () {
      selectionSort(randomArr);
      randomArr.should.eql(sortedArr);
    });

  });

  describe('Bubble sort', function () {

    it('should sort the array in place', function () {
      bubbleSort(randomArr);
      randomArr.should.eql(sortedArr);
    });

  });

  describe('Merge sort', function () {

    it('should create a new sorted array', function () {
      const expected = mergeSort(randomArr);
      expected.should.eql(sortedArr);
    });

  });

  describe('Merge sort in place', function () {

    it('should sort the array in place', function () {
      mergeSortInPlace(randomArr);
      randomArr.should.eql(sortedArr);
    });

  });

  describe('Quick sort', function () {

    it('should sort the array in place', function () {
      quickSort(randomArr);
      randomArr.should.eql(sortedArr);
    });

  });

});
