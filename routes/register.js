const Router = require('express')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');

const regRouter = new Router();

regRouter.post('/', [
    body('login', 'The login field is empty').trim().notEmpty(),
    body('password', 'The password field is empty').trim().notEmpty(),
    body('email', 'The email field is empty').trim().notEmpty(),
    body('email', 'Entered email is not right').trim().isEmail()
], async (req,res) => {
    let errors = validationResult(req)
    let errorsList = errors.array()
    if(errors.isEmpty()){
        try{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            let result = await userModel.create(req.body)
            res.status(200).json(result)
        } catch(e){
            errorsList.push({msg: 'Incorrect input'})
            console.log(errorsList)
            res.status(500).json(errorsList)
        }
    }
    else{
        console.log(errorsList)
        res.status(500).json(errorsList)}
})

module.exports = regRouter