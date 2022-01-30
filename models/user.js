const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    gender: {
        type:String,
        enum: ['male', 'female', 'other']
    },
    maritalStatus: {
        type: String,
        enum: ['married', 'widowed', 'separated', 'divorced', 'single']
    },
    salary: Number
})

module.exports = mongoose.model('user', schema)