const mongoose = require('mongoose')


const schemaApi = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tasks', schemaApi)