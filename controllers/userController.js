const userModel = require('../models/user')

function read() {
    return userModel.find()
}

function readOne({ id }) {
    return userModel.findOne({ _id: id })
}

function create(newUser) {
    return userModel.create(newUser)
}

function update({ id }, updatedUser) {
    return userModel.findByIdAndUpdate(id, updatedUser, { new: true })
}

function del({ id }) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { read, readOne, create, update, delete: del }