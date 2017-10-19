const express = require("express");
const bodyParser = require("body-parser");
const viewRouter = require('./viewRourter');
const fileController = require('./fileController');
const outPut = "ques.json";

let app = express();

app.use(bodyParser.urlencoded({extender : true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/css/style_about.css', (req, res) => {
  res.sendFile(__dirname + "/public/css/style_about.css");
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.use('/ask', viewRouter);

//
// app.get('/ask', (req, res) => {
//   res.sendFile(__dirname + "/public/ask.html");
// });
//
// app.post('/ask', (req, res)=>{
//   res.send(req.body);
//   res.redirect('/');
// });


// listen
app.listen(3000, (err)=>{
  if (err) {
    console.log(err);
  }
  else {
    console.log("website is up");
  }
});
