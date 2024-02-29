const Router = require('express');
const profileRouter = new Router();
const userModel = require('../models/userModel')

profileRouter.get('/:id', async (req,res) => {
    const id = req.params.id.slice(1,req.params.id.length)
    let result = await userModel.find({'_id': id})
    res.status(200).json(result)
})

profileRouter.get('/getPosts/:id', async (req,res) => {
    const id = req.params.id.slice(1,req.params.id.length)
    let result = await userModel.findOne({'_id': id}, {posts:1})
    res.status(200).json(result)
})

profileRouter.put('/createPost/:id', async (req,res) => {
    const id = req.params.id.slice(1,req.params.id.length)
    let result = await userModel.updateOne({'_id': id}, {$push:{posts:[{title: req.body.title, body: req.body.body}]}})
    res.status(200).json(result)
})

profileRouter.put('/deletePost/:id', async (req,res) => {
    const id = req.params.id.slice(1,req.params.id.length)
    let result = await userModel.updateOne({'_id': id}, {$pull:{posts:{title: req.body.title, body: req.body.body}}})
    res.status(200).json(result)
})

module.exports = profileRouter