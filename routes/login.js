const Router = require('express');
const logRouter = new Router();
const userModel = require('../models/userModel')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

logRouter.post('/', [
    body('login', 'The login field is empty')
        .trim()
        .notEmpty(),

    body('password', 'The password field is empty')
        .trim()
        .notEmpty()
], async (req,res) => {
    let error = validationResult(req)
    let errorsList = error.array()
    if(error.isEmpty()){
        try{
            const userRight = await userModel.find({login: req.body.login})
            if(Object.keys(userRight).length !== 0){
                if(await bcrypt.compare(req.body.password, userRight[0].password))
                    res.status(200).json(userRight)
                else{
                    errorsList.push({msg: 'Incorrect login or password'})
                    res.status(500).json(errorsList)}
            }
            else{
                errorsList.push({msg: 'Incorrect login or password'})
                res.status(500).json(errorsList)
            }
        } catch(e){
            console.log(error)
            res.status(500).json(errorsList)
        }
    }
    else{
        console.log(error)
        res.status(500).json(errorsList)}
})

module.exports = logRouter