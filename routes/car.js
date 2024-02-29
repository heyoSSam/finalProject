const Router = require('express');
const carRouter = new Router();
const axios = require('axios');
const { models } = require('mongoose');

carRouter.post('/', async (req,res) => {
    try{
        
        let makeId = await axios.get(`https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id&make=${req.body.model}`, {headers: {
            'X-RapidAPI-Key': '537c64525cmsh7ed085e0b67400dp1f447ajsn51c69716a6b4',
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
          }})
        
        makeId = makeId.data.data[0].id
        let modelsInfo = await axios.get(`https://car-api2.p.rapidapi.com/api/models?limit=2&sort=id&direction=asc&year=2020&verbose=yes&make_id=${makeId}`, {headers: {
            'X-RapidAPI-Key': '537c64525cmsh7ed085e0b67400dp1f447ajsn51c69716a6b4',
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }})

        let modelsName = []


        modelsInfo.data.data.forEach((element) => {
            modelsName.push({model:element.name, makeId : makeId})
        })

        res.status(200).json(modelsName)

    } catch(e){
        console.log(e)
        res.status(505).json(e)
    }
    
})

module.exports = carRouter