const express = require('express');
const router = express.Router();
// const fileController = require('./fileController');




router.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/ask.html");
});

router.post('/', (req, res)=>{
  res.send(req.body);
  res.redirect('/');
});


module.exports = router;
