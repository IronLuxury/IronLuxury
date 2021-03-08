const mongoose = require('mongoose')

const contactScheme = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    message:{
        type: String,
        require: true
    }
})

const Contact = mongoose.model('Contact', contactScheme)

module.exports = Contact