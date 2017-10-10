const express = require("express");

let app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/css/style_about.css', (req, res) => {
  res.sendFile(__dirname + "/public/css/style_about.css");
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// listen
app.listen(3000, (err)=>{
  if (err) {
    console.log(err);
  }
  else {
    console.log("website is up");
  }
});
