const NewsAPI = require('newsapi');
const mongoose = require('mongoose');
const News = require('../models/news');

//connect to db
const dburl = 'mongodb+srv://taskapp:ishandey@cluster0.chybv.mongodb.net/newsapp';
mongoose.connect( dburl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to db!');
});

const newsapi = new NewsAPI('6f29063d7f7146ba8c9394f1fb46a72c');

newsapi.v2.topHeadlines({

    country: 'us'
  
  }).then(response => {
  
    //console.log(response);
    //const obj = JSON.parse(response.articles);
    console.log(response.articles);
    response.articles.forEach(element => {
        const newsArticle = new News(element);
        newsArticle.save();
    });
    //const news = new News(respo)
    /*
  
      {
  
  //iterate over array, check publishAt since last one hour and save in mongo
  
      }
  
    */
  
  });