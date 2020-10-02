const bodyParser = require('body-parser');
const express = require('express');
const News = require('../models/news');
const app = express();
app.use(bodyParser.json());

//count of ALL documents if query parameter is not there
//if query parameter /count?sourceName=The Hindu then count documents from that source name
app.get('/count', async (req,res) => {
    if(req.query.sourceName){
        const sourceName=req.query.sourceName;
        News.countDocuments({"source.name" : "The Hindu"}, (err,count) => {
            return res.send({ count });
        })
    }
    try {
        News.countDocuments({}, (err,count) => {
            res.send({ count });
        });
    } catch(e){
        console.log(e);
    }
});

//list of sources
app.get('/sources', async (req,res) => {
    try {
        News.find().distinct('source.name', (err,names) => {
            res.send({ names });
        });
    } catch(e){
        console.log(e);
    }
});

//list of unique authors
app.get('/authors', async (req,res) => {
    try {
        News.find().distinct('author', (err,authors) => {
            res.send({ authors });
        });
    } catch(e){
        console.log(e);
    }
});

app.listen(8081, () => {
    console.log('Metadata service is running on port 8081');
});