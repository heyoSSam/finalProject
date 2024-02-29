const Router = require('express');
const currencyRouter = new Router();
const axios = require('axios')

currencyRouter.post('/', async (req,res) => {
    let curRate = await axios.get(`https://v6.exchangerate-api.com/v6/c883ae1276a08eb4ec9d6325/latest/${req.body.curr}`)
    res.status(200).json(curRate.data);
})

module.exports = currencyRouter