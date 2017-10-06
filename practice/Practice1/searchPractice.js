'use strict'

function search(input, target) {
  // input = input.sort((a,b) => a-b);
  var length = input.length;
  //kiem tra phan tu target co nam trong pham vi cua mang ko
  if (target > 10000 || target < -10000) {
    return -1;
  }
  //kiem tra co xem co ton tai mang ko
  if (!length) {
    return -1;
  }
  for (var i = 0; i < length; i++) {
    if (input[i] === target) {
      return i;
    }
  }
  return -1;
}

module.exports = search
