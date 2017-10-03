var a = 5;
var b = "sdsadsafj";
console.log(a + b);
// cau dieu kien
if (a === b) {
  console.log("a = b");
}
else {
  console.log("a != b");
}
// vongn lap for
// for (var i = 0; i < 10; i++) {
//     console.log("text");
// }
// function
function Plus(a, b) {
  return a+b;
};
console.log(Plus(3, 4));

var A = (a, b) => {
  return a + b;
}
console.log(A(2, 4));
//object
 var obj = {
   pro1 : Plus,
   pro2 : A
 }
console.log(obj.pro1(2, 5));
console.log(obj.pro2(3, 7));
//  callback:  1 function la 1 thuoc tinh cua function khac.

// function setTimeOut(callback) {
//     setTimeout(function() {
//       callback();
//     }, 1000);
// }
// function callback1(callback) {
//   setTimeout(function () {
//     callback();
//   }, 2000);
// }
//
// function ab() {
//   console.log(Date.now());
// }

// setTimeOut(ab);

function countDown(count){
  for (i = count; i >= 0 ;i--) {
    setTimeout(function () {

      console.log(i);
    }, (count - i)* 1000);
  }
}
countDown(6);
function functionName() {
  console.log("a");
}
functionName();
