const express = require('express');
const questionRouter = express.Router();
const fileCtrl = require('./fileController');
const questFileName = 'question.json';

let temp;
questionRouter.get('/', (req, res) => {
    let list = [];
    try {
        list = fileCtrl.readDataFromFile(questFileName);

        //get random question in array
        let id = Math.floor(Math.random() * list.length);
        let question = list[id];
        temp = id;
        res.render('question', {
          idx: id,
          questionx: list[id].question
        });
    } catch (ex) {
        res.redirect('/');
        console.log('question.json not found');
    }
})

questionRouter.get('/:id', (req, res) => {
    let list = fileCtrl.readDataFromFile(questFileName);
    let id = req.params.id;
    console.log(id);
    let tong = list[id].yes + list[id].no;
    let percentY = Math.floor((list[id].yes / tong) * 100);
    res.render('result', {
        id: 'value="' + id + '"',
        question: list[id].question,
        yes: list[id].yes,
        no: list[id].no,
        percentY: percentY + '%',
        percentN: (100 - percentY) + '%'
    })
})

questionRouter.post('/', (req, res) => {
    let list = [];
    try {
        list = fileCtrl.readDataFromFile(questFileName);
    } catch (ex) {
        console.log(ex);
    }
    let id = temp;
    if (req.body.choice === 'yes'){
        list[id].yes++;
    }
    else if (req.body.choice === 'no'){
        list[id].no++;
    }
    fileCtrl.writeDataToFile(questFileName, list);
    res.redirect('/question/' + id);
})

module.exports = questionRouter
