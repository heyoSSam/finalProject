const Router = require('express');
const newsRouter = new Router();
const axios = require('axios')

newsRouter.get('/', async (req,res) => {
    let news = await axios.get(`https://newsapi.org/v2/everything?q=car&from=2024-02-26&sortBy=popularity&apiKey=9d467022e3c44f45ac112889423f0d48`)
    res.status(200).json(news.data.articles)
})

module.exports = newsRouter