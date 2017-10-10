const fs = require("fs");
const fileController = require("./fileController.js");


// ghi file
let fileString = "file hello world";
let testObj = {
  a : 1,
  b : 1
}
//let resultSyns = fs.writeFile();
// let result = fs.writeFileSync("test.json", JSON.stringify(testObj), {encoding : "utf-8"});
// let result1 = fs.writeFileSync("test.txt", JSON.stringify(testObj), {encoding : "utf-8"});
let result2 = fileController.writeDataToFile("test1.json", testObj);


// doc file
  // let readFile = fs.readFileSync("test.json", "utf-8");
  // console.log(readFile);
  // console.log(JSON.parse(readFile));

  // let readFileSync = fs.readFile("test.json", "utf-8", (err, val) => {console.log(val);})

  let readFileSync = fileController.readDataFromFile("test1.json");
  console.log(readFileSync);
