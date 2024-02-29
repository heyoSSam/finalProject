const Router = require('express')
const userModel = require('../models/userModel')

const userRouter = new Router();

userRouter.get('/', async (req,res) => {
    try{
        let result = await userModel.find({})
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})

userRouter.delete('/:id', async (req,res) => {
    try{
        const id = req.params.id.slice(0,req.params.id.length)
        let result = await userModel.deleteOne({_id:id})
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json(e)
    }
})

module.exports = userRouter