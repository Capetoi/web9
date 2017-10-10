const express = require("express");

let app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/about', (req, res) => {
  res.send("Nguyen Cong Thanh");
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
