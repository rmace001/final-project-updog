const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Runs = new Schema({
    runName: {
        type: String
    }
})

module.exports = Runs