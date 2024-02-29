const mongoose = require('mongoose')
const {Schema} = mongoose

const carouselSchema = new Schema({
    body: {
        type: String,
        required: true
    }
})

const carouselModel = mongoose.model('carouselModel', carouselSchema)

module.exports = carouselModel

