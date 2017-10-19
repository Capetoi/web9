const express = require('express');
const router = express.Router();
const fileController = require('./fileController');
const inputFile = 'question.json';
const outputFile = 'question.json';
router.get('/', (req, res)=>{
  res.render("ask");
});

router.post('/', (req, res) => {
  let list = [];
  try {
    list = fileController.readDataFromFile(outputFile);
  } catch (e) {
    console.log("ko ton tai file");
    console.log(e);
  }
  let obj = req.body;
  obj.yes = 0;
  obj.no = 0;
  list.push(obj);
  try {
    fileController.writeDataToFile(inputFile, list);
    res.render("ask", {traLoi: "Gui thanh cong"});
  } catch (e) {
    res.render("ask", {traLoi: "Gui that bai"});
  }

});

module.exports = router;
