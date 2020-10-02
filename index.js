const mongoose = require('mongoose');
const News = require('./models/news');

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

// //parse json file and store in db only once
// const seed1 = {
//     source: {
//         id: 'the-hindu',
//         name: 'The Hindu'
//     },
//     author: 'Rakesh Ankit',
//     title: 'The Prime Minister India almost forgot',
//     description: 'Lal Bahadur Shastri’s political life has lessons, but it is his sudden passing that vitiates his public recall and his history',
//     url: 'https://www.thehindu.com/opinion/lead/the-prime-minister-india-almost-forgot/article32747350.ece',
//     urlToImage: 'https://www.thehindu.com/opinion/lead/kk337s/article32747349.ece/ALTERNATES/LANDSCAPE_615/02THSASTRI1',
//     publishedAt: '2020-10-01T18:42:46Z',
//     content: 'Sharing his birthday with Gandhi and coming from the province of Jawaharlal Nehru, Lal Bahadur Shastri was the self-effacing layman who became Indias second Prime Minister (1964-66). His climb atop t… [+7618 chars]'
// };
// const seedNews = new News(seed1);
// seedNews.save().then(() => {
//     console.log('News article entered');
// }).catch((err) => {
//     if(err){
//         throw err;
//     }
// })

//run services
require('./newsService/news');
require('./metadataService/metadata');