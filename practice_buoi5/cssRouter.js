const express = require('express');
const router = express.Router();

router.get('/css/nav.css', (req, res)=>{
  res.sendFile(__dirname + "/public/css/nav.css");
});

router.get('/css/style_about.css', (req, res) => {
  res.sendFile(__dirname + "/public/css/style_about.css");
});


router.get('/question/css/nav.css', (req, res)=>{
  res.sendFile(__dirname + "/public/css/nav.css");
});


router.get('/question/css/style_about.css', (req, res) => {
  res.sendFile(__dirname + "/public/css/style_about.css");
});
module.exports = router;
