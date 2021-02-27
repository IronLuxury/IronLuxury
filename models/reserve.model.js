const mongoose = require('mongoose')
const Car = require('../models/car.model')
const User = require('../models/user.model')

const reserveScheme = new mongoose.Schema(
    {
    dateReserve: {
        type:Date,
        require:true,
        unique: true
        //TODO MENSAJE DE ERROR
    },    
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    car:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Car',
        required: true,
    },
    },
    {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }}
)

const Reserve = mongoose.model('Reserve', reserveScheme)
module.exports = Reserve