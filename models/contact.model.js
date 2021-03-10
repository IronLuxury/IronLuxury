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
    },
    location:{
        type:{
        type:String,
        enum: ['Point'],
        required:true,
        default: 'Point'
        },
       coordinates:{
           type:[Number],
           required:true
       }
    }
})

contactScheme.index({location: '2dsphere'})

const Contact = mongoose.model('Contact', contactScheme)

module.exports = Contact