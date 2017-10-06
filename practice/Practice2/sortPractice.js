'use strict'

function sort(input) {

  function quickSort(arr, left, right){
    var i = left;
    var j = right;
    var pivot = arr[Math.floor((left + right) / 2)];

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    if (left < j) {
      quickSort(arr, left, j);
    }
    if (i < right) {
      quickSort(arr, i, right);
    }
  }
  quickSort(input, 0, input.length - 1);
  return input;
}

module.exports = sort
