const mongoose = require('mongoose')

const carScheme = new mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    topSpeed:{
        type:Number,
        require:true
    },
    maxPower:{
        type: Number,
        require: true
    },
    engineSize:{
        type: Number,
        require: true
    },
    price:{
        type:Number,
        require:true
    },
    seats:{
        type:Number,
        require: true
    },
    image:{
        type: String,
        validate: {
            validator: (text) => {
                return text.startsWith("http");
            },
            message: "URL must start with HTTP/HTTPS"
        }
    }
})

const Car = mongoose.model('Car', carScheme)

module.exports = Car