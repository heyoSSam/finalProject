const Router = require('express')
const carouselModel = require('../models/carouselModel')

const carouselRouter = new Router();

carouselRouter.post('/', async (req,res) => {
    try{
        let result = await carouselModel.create(req.body)
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})

carouselRouter.get('/', async (req,res) => {
    try{
        let result = await carouselModel.find()
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})

carouselRouter.put('/', async (req,res) => {
    try{
        console.log(req.body)
        let result = await carouselModel.updateOne({_id:req.body.id}, {body: req.body.body})
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})



module.exports = carouselRouter