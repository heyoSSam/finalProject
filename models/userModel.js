const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    posts: [{title: String, body: String}],
    admin: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel

