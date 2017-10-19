const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/about', (req, res) => {
  res.send("Nguyen Cong Thanh");
});

app.get('/postabout', (req, res) => {
  res.sendFile(__dirname + "/public/ask.html");
});
app.post('/postabout', (req, res) => {
  res.send("post");
});
app.get("/style", (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});
app.listen(6969, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Website is up");
  }
});
