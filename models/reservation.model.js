const mongoose = require('mongoose')
const Car = require('./car.model')
const User = require('./user.model')

const reservationScheme = new mongoose.Schema(
    {
    dateReserve: {
        type:Date,
        require:true,
        unique: true
        //TODO MENSAJE DE ERROR
    },
    phone:{
        type:Number,
        require:true
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

const Reservation = mongoose.model('Reservation', reservationScheme)
module.exports = Reservation