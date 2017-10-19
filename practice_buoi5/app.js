const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const homeRouter = require('./homeRouter');
const aboutCVRouter = require('./aboutCVRouter');
const cssRouter = require('./cssRouter');
const askRouter = require('./askRouter');
const questionRouter = require('./questionRouter');

let app = express();
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extender : true}));

// trang chu
app.use('/', homeRouter);
app.use('/', cssRouter);
app.use('/about', aboutCVRouter);
app.use('/ask', askRouter);
app.use('/question', questionRouter);

app.get('/question/:id', (req, res)=>{
  res.send(req.params);
});

app.listen(3000, (err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("website is up");
  }
});
