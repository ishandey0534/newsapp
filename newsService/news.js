const bodyParser = require('body-parser');
const express = require('express');
const News = require('../models/news');
const app = express();
app.use(bodyParser.json());

//based on query parameter sourceName,date,authorName
app.get('/articles', (req,res) => {
    if(req.query.sourceName){
        sourceName = req.query.sourceName;
        News.find({'source.name': sourceName}, (err,articles) => {
            res.send({ articles });
        });
    }else if(req.query.date){
        date = req.query.date;
        //News.find(publishedAt: /date/)
    }else if(req.query.authorName){
        authorName = req.query.authorName;
        News.find({'author': authorName}, (err,articles) => {
            res.send({ articles });
        });
    } else {
        res.send({ msg: "Enter query parameter sourceName, date, or authorName"});
    }
})

app.listen(8082, () => {
    console.log('News service is running on port 8082');
});
 