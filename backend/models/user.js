const mongoose = require('mongoose')
const Schema = mongoose.Schema

let User = new Schema({
    Firstname: {
        type : String
    },
    Lastname: {
        type: String
    },
    Username: {
        type: String
    },
    Password: {
        type: String
    }
})
module.exports = User