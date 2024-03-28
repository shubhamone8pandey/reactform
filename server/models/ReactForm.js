const mongoose = require('mongoose')

const ReactFormSchema = new mongoose.Schema({
    name: String,
    email:String
})

const ReactFormModel = mongoose.model('ReactForm', ReactFormSchema)

module.exports = ReactFormModel