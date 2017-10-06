'use strict'
const fs = require('fs');
// random so
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// khoi tao input
function generateInput(minLength, maxLength, lowerNum, upperNum) {
  var input = [];
  var length = randomNum(minLength, maxLength);
  for (var i = 0; i < length; i++) {
    input[i] = randomNum(lowerNum, upperNum);
  }
  input.sort((a, b) => a - b);
  return input;
}
// zero-length
function zeroLengthCase(obj) {
  obj.input = [];
  obj.target = randomNum(-10000, 10000);
  obj.output = -1;
  return obj;
}
// not found
function notFoundCase(obj) {
  obj.input = generateInput(1, 500, -10000, 10000);
  var target = randomNum(-10000, 10000);
  while (obj.input.indexOf(target) !== -1) {
    target = randomNum(-10000, 10000);
  }
  obj.target = target;
  obj.output = -1;
  return obj;
}

// first index
function firstIndexCase(obj){
  var input = generateInput(1, 500, -10000, 10000);
  obj.input = input;
  obj.target = input[0];
  obj.output = 0;
  return obj;
}

// last index
function lastIndexCase(obj){
  var input = generateInput(1, 500, -10000, 10000);
  obj.input = input
  obj.target = input[input.length - 1];
  obj.output = input.length - 1;
  return obj;
}

// middle index
function middleIndexCase(obj){
  var input = generateInput(1, 500, -10000, 10000);
  var middle = Math.floor(input.length / 2);
  obj.input = input
  obj.target = input[middle];
  obj.output = middle;
  return obj;
}

//normal cases
function normalCase(obj) {
  var input = generateInput(1, 500, -10000, 10000);
  var temp = randomNum(0, input.length - 1);
  obj.input = input;
  obj.target = input[temp];
  obj.output = temp;
  return obj;
}
function generate(numberOfTestcases, filePath = "./test-data.json"){
  var arr = [];
  // khoi tao object
  var input = [];
  var target = 0;
  var output = -1;
  var obj = {
    "input" : input,
    "target" : target,
    "output" : output,
  }
  // specical cass
  if (numberOfTestcases >= 5) {

    // zero-length
    arr.push(zeroLengthCase(obj));

    // not found
    arr.push(notFoundCase(obj));

    // first index
    arr.push(firstIndexCase(obj));

    // last index
    arr.push(lastIndexCase(obj));

    // middle index
    arr.push(middleIndexCase(obj));
  }
  else {
    // normal cass
    for (var i = 0; i < numberOfTestcases; i++) {
      arr.push(normalCase(obj));
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(arr), 'utf-8');
  return arr;
}

module.exports = generate
