const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    source : {
        id: String,
        name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String, //change to date?
    content: String
});

const News = mongoose.model('News', newsSchema);
module.exports = News;